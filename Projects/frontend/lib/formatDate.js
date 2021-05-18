import Moment from 'moment';
import moment from 'moment';

function formatDate(date, format='DD-MM-YYYY à HH:mm', lg='en-gb') {
  moment.locale(lg);
  return Moment(date).format(format);
}

function sinceDate(date, format='day', lg='en-gb') {
  moment.locale(lg);
  return Moment(date).startOf(format).fromNow(); ;
}

export {formatDate, sinceDate}