import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(Math.floor(seconds % 3600) / 60);
    const secs = (seconds % 3600) % 60;
    let timestring = '';
    if (hours > 0) {
      timestring += hours > 1 ? `${hours} hrs` : `${hours} hr`
      if(minutes > 0) timestring += `, `
    }
    if (minutes > 0) {
      timestring += minutes > 1 ? `${minutes} mins` : `${minutes} min`
      if(secs > 0) timestring += `, `
    }
    if (secs > 0) {
      timestring += secs > 1 ? `${secs} secs` : `${secs} sec`
    }
    return timestring
  }
}

@Pipe({
  name: 'timeAgo',
  pure:true
})

export class TimeAgoPipe implements PipeTransform{
  transform(value:any, args?:any):any{
    if (value){
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds <29){
        return 'Just now';
      }
      const intervals:any = {
        'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
      };
      let counter;
      for (const i in intervals){
        counter = Math.floor(seconds/intervals[i]);
        if (counter > 0)
        if (counter === 1){
          return counter + ' ' + i + ' ago';
        } else {
          return counter + ' ' + i + 's ago';
        }
      }
    }
    return value;
  }
}