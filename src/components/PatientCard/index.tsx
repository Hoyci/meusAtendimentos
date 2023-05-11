import {
  Container,
  PatientActions,
  PatientCategory,
  PatientInfos,
  PatientTitle,
  PatitentSubtitle,
} from './styles';

import editIcon from '../../assets/images/icons/edit.svg';
import deleteIcon from '../../assets/images/icons/delete.svg';
import { useNavigate } from 'react-router-dom';
import { daysOfTheWeek, getHours } from '../../utils';
import { PatientProps } from '../../types';

export default function PatientCard({ patient }: { patient: PatientProps }) {
  const { id, name, schedule } = patient;
  const patientSchedule = getHours(schedule.start, schedule.end);
  const navigate = useNavigate();

  const handleEditPatient = () => {
    navigate(`/patient/edit/${id}`);
  };

  const handleDeletePatient = () => {
    alert('modal de confirmação');
  };

  return (
    <Container>
      <PatientInfos>
        <PatientTitle>{name}</PatientTitle>
        <PatitentSubtitle>{`${daysOfTheWeek[schedule.dayOfWeek]} - ${
          patientSchedule[0]
        } às ${patientSchedule[1]} `}</PatitentSubtitle>
        <PatientCategory>Social</PatientCategory>
      </PatientInfos>

      <PatientActions>
        <img
          className="edit"
          src={editIcon}
          alt="Editar paciente"
          onClick={handleEditPatient}
        />
        <img
          className="delete"
          src={deleteIcon}
          alt="Deletar paciente"
          onClick={handleDeletePatient}
        />
      </PatientActions>
    </Container>
  );
}
