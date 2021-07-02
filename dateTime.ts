/**
 * ## Converts SQL Date Time to JS Date object
 *
 * @param SQL_DATE_TIME string
 *
 * Sign: SurajMandal
 *
 * Website: surajmandal.in
 *
 * ts: true
 */
export function sqlDateToJsDate(prop: any): Date {
  //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
  var sqlDateArr1 = prop.split('-');
  //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
  var sYear = sqlDateArr1[0];
  var sMonth = Number(sqlDateArr1[1]) - 1;
  var sqlDateArr2 = sqlDateArr1[2].split(' ');
  //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
  var sDay = sqlDateArr2[0];
  var sqlDateArr3 = sqlDateArr2[1].split(':');
  //format of sqlDateArr3[] = ['hh','mm','ss.ms']
  var sHour = sqlDateArr3[0];
  var sMinute = sqlDateArr3[1];
  var sqlDateArr4 = sqlDateArr3[2].split('.');
  //format of sqlDateArr4[] = ['ss','ms']
  var sSecond = sqlDateArr4[0];
  var sMillisecond = sqlDateArr4[1];

  return new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, sMillisecond);
}
