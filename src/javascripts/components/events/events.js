const buildEvents = (event) => {
  const domString = `
                      <div id=${event.id} class="card text-center event-card grow" style="width: 22rem;">
                        <div class="card-body">
                          <h5 class="card-title">${event.name}</h5>
                          <button id="viewIndividualEvent" class="btn btn-primary view">View Event Details</button>
                          <button type="button" id="delete-event" class="btn btn-secondary colored">Delete Event</button>
                        </div>
                      </div>`;
  return domString;
};

export default {
  buildEvents,
};
