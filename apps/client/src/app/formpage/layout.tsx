import FormSection from "@/components/FormSection"

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
      <div className="container flex flex-col items-center justify-around px-6 mx-auto">
        {children}
      </div>
    </div>
  )
}
