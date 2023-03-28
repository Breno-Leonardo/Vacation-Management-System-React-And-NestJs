export function formatDateRequestTopic(): string {
  const width = window.innerWidth;
  if (width < 768) {
    return "Data";
  }
  return "Data Solicitação";
}

export function formatNameForMobile(name: string): string {
  const width = window.innerWidth;
  const names = name.split(" ");
  if (width < 768) {
    if (name.length > 2) {
      return names[0] + " " + names[names.length - 1];
    }
  }
  return name;
}

export function formatName(name: string): string {
  const names = name.split(" ");
  if (name.length > 2) {
    return names[0] + " " + names[names.length - 1];
  }

  return name;
}

export function formatDate(date: string): string {
  const dateConvert = new Date(date);
  const width = window.innerWidth;

  let day = dateConvert.getUTCDate().toString();
  let month = (dateConvert.getUTCMonth() + 1).toString();
  let year = dateConvert.getUTCFullYear().toString();
  if (width < 768) {
    year = year.substring(2, 4);
  }
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  return day + "/" + month + "/" + year;
}

export function formatDateForUTC(date: string): string {
  const dateConvert = new Date(date);
  const width = window.innerWidth;

  let day = dateConvert.getUTCDate().toString();
  let month = (dateConvert.getUTCMonth() + 1).toString();
  let year = dateConvert.getUTCFullYear().toString();
  if (width < 768) {
    year = year.substring(2, 4);
  }
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  return day + "-" + month + "-" + year;
}
