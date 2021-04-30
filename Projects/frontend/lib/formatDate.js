import Moment from 'moment';
import 'moment/locale/fr';

export default function formatDate(date, format='DD-MM-YYYY à HH:mm') {
  return Moment(date).format(format);
}