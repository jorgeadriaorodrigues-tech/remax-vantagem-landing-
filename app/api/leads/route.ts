
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { nome, email, telefone } = body;
    
    if (!nome?.trim() || !email?.trim() || !telefone?.trim()) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[0-9\s\+\-\(\)]+$/;
    if (!phoneRegex.test(telefone)) {
      return NextResponse.json(
        { error: "Telefone inválido" },
        { status: 400 }
      );
    }

    // Create lead in database
    const lead = await prisma.lead.create({
      data: {
        nome: nome.trim(),
        email: email.toLowerCase().trim(),
        telefone: telefone.trim(),
      },
    });

    console.log("New lead created:", lead);

    return NextResponse.json(
      { 
        message: "Lead criado com sucesso",
        leadId: lead.id 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating lead:", error);
    
    return NextResponse.json(
      { error: "Erro interno do servidor. Tenta novamente." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
