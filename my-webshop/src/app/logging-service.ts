import {Output} from "@angular/core";
import EventEmitter = NodeJS.EventEmitter;

export class LoggingService {
  logStatusChange(status: string) {
    // we centralize the code.
    console.log('A server status changes, new status: ' + status);

  }
}

// Now we use the service
// remember to import.

export class NewAccountCompnent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService) {
  }

  onCreateAccount(accountName: string, accountstatus: string){
    this.accountAdded.emit({
      name: accountName,
      status: accountstatus
    });
    const service = new LoggingService();
    service.logStatusChange(accountstatus);
  }
}
