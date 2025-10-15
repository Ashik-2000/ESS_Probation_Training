export class LoggingService {
  newServerCreated(name: string) {
    console.log('A new account added, new account: ' + name);
  }
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
