import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {WorkExperience, experience} from "@/shared/lib/data";
import dayjs from "dayjs";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentWorkingExperience() {
  let periodInMonths = 0
  for (let i = 0; i < experience.length; i++) {
    periodInMonths += dayjs(experience[i].endDate).diff(experience[i].startDate, 'months')
  }
  const years = Math.floor(periodInMonths / 12)
  const months = periodInMonths % 12
  const yearsText = years > 0 ? `${years} ${years > 1 ? 'years' : 'year'}` : ''
  const monthsText = months > 0 ? `${months} ${months > 1 ? 'months' : 'month'}` : ''
    console.log(yearsText, months)
    return `${yearsText} ${monthsText}`
}