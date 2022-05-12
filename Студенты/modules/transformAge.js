export function transformAge(age) {
    if (String(age).substr(-1) == 1) {
      return "год";
    } else if (String(age).substr(-1) > 1 && String(age).substr(-1) < 5) {
      return "года";
    } else {
      return "лет";
    }
  }
  