import React from 'react';
const TicketCard = ({ ticket, users }) => {
  const assignedUser = users.find(user => user.id === ticket.userId);

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>ID: {ticket.id}</p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Assigned to: {assignedUser ? assignedUser.name : 'Unassigned'}</p>
      <p>Tags: {ticket.tag.join(', ')}</p>
    </div>
  );
};

export default TicketCard; 