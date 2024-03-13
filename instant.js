import xapi from 'xapi';

xapi.event.on('UserInterface Extensions Panel Clicked', (event) => {
    if(event.PanelId === "WEBEX"){
      xapi.Command.Webex.Meetings.InstantMeeting.Start();
    }
});
