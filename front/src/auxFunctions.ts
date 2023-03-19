export function formatDateRequestTopic(): string {
  const width = window.innerWidth;
  if (width < 768) {
    return "Data";
  }
  return "Data Solicitação";
}

export function formatName(name: string): string {
  const width = window.innerWidth;
  const names = name.split(" ");
  if (width < 768) {
    if (name.length > 2) {
      return names[0] + " " + names[names.length - 1];
    }
  }
  return name;
}

export function formatDateYearForMobile(name: string): string {
  const width = window.innerWidth;
  const names = name.split(" ");
  if (width < 768) {
    if (name.length > 2) {
      return names[0] + " " + names[names.length - 1];
    }
  }
  return name;
}
