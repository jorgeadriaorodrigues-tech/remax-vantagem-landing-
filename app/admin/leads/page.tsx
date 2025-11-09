import { prisma } from '@/lib/db';

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { data_submissao: 'desc' }
  });

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Leads Recebidos</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-slate-100">
              <th className="border px-3 py-2">Nome</th>
              <th className="border px-3 py-2">Email</th>
              <th className="border px-3 py-2">Telefone</th>
              <th className="border px-3 py-2">Data</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="border px-3 py-2">{lead.nome}</td>
                <td className="border px-3 py-2">{lead.email}</td>
                <td className="border px-3 py-2">{lead.telefone}</td>
                <td className="border px-3 py-2">{new Date(lead.data_submissao).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads.length === 0 && (
          <div className="text-center text-slate-500 py-8">Nenhum lead encontrado.</div>
        )}
      </div>
    </main>
  );
}
