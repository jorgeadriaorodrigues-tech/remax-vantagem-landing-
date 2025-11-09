// Script para exportar leads do banco de dados para Excel
const { PrismaClient } = require('@prisma/client');
const ExcelJS = require('exceljs');
const prisma = new PrismaClient();
const path = require('path');

async function exportLeads() {
  try {
    const leads = await prisma.lead.findMany();
    if (!leads.length) {
      console.log('Nenhum lead encontrado no banco de dados.');
      return;
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Leads');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Nome', key: 'name', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Telefone', key: 'phone', width: 20 },
      { header: 'Mensagem', key: 'message', width: 40 },
      { header: 'Imóvel', key: 'property', width: 30 },
      { header: 'Data', key: 'createdAt', width: 25 },
    ];

    leads.forEach((lead) => {
      worksheet.addRow({
        id: lead.id,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        message: lead.message,
        property: lead.property,
        createdAt: lead.createdAt ? lead.createdAt.toISOString() : '',
      });
    });

    const filePath = path.join(__dirname, 'leads_exportados.xlsx');
    await workbook.xlsx.writeFile(filePath);
    console.log(`Leads exportados com sucesso para: ${filePath}`);
  } catch (error) {
    console.error('Erro ao exportar leads:', error);
  } finally {
    await prisma.$disconnect();
  }
}

exportLeads();
