import PatientsTable from '@features/patients/pages/PatientsTable'
import PatientsTableOperations from '@features/patients/pages/PatientsTableOperations'
import Heading from '@components/Heading'
import useDocumentTitle from '@hooks/useDocumentTitle'

export default function Patients() {
  useDocumentTitle('Pacientes')
  return (
    <>
      <Heading className="mb-6" data-testid="page-title-patients">
        Pacientes
      </Heading>
      <PatientsTableOperations />
      <PatientsTable />
    </>
  )
}
