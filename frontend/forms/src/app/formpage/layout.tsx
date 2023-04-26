import FormSection from '@/components/FormSection'

export default function FormPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div>
        <FormSection />
      </div>
      {children}
    </div>
  )
}
