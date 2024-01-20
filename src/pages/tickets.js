import React, { useContext, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { Table, Row } from "react-bootstrap";

import { VisibilityContext } from "../contexts/visibilityContext";

import styles from "../styles/tickets.module.scss";

const Tickets = () => {
  const [submitStatus, setSubmitStatus] = useState("Submit");
  const { ticketsFrmShow } = useContext(VisibilityContext);
  const {
    register,
    setValue,
    formState: { errors },
    isSubmiting,
    control,
  } = useForm({
    mode: "onTouch",
    reValidateMode: "onChange",
  });

  toast.configure();

  // const handleFrmClose = () => {
  //   history.push("/");
  //   setFormsHide();
  // }

  document.title = "SofTesting | Tickets";

  const [ticket, setTicket] = useState(null);
  const [newTicket, setNewTicket] = useState(false);
  const [ticketId, setTicketId] = useState(null);
  const [ticketEmail, setTicketEmail] = useState(null);
  const [selectedRow, setSelectedRow] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [ticketResponse, setTicketResponse] = useState(null);
  const [sendEmail, setSendEmail] = useState(false);
  const [errors0, setErrors0] = useState(false);
  const location = window.location.hostname;
  let url_getTickets = "",
  url_saveTicketResponse = "",
  urlRole = "";

// if (location === "localhost") {
//   url = `http://${location}:8000/api/contract`;
//   urlRole = `http://${location}:8000/api/user/userRole`;
// } else {
url_getTickets = `https://api.softestingca.com/api/ticket/getTickets`;
url_saveTicketResponse = `https://api.softestingca.com/api/ticket/saveTicketResponse`;
urlRole = `https://api.softestingca.com/api/user/userRole`;
// }
 
  const editor = useRef(null);
  
  useEffect(() => {
    let emailW = "";
    setEmail(JSON.parse(localStorage.getItem("userEmail")));
    //console.log(JSON.parse(localStorage.getItem("userEmail")));
    if (JSON.parse(localStorage.getItem("userEmail"))) {
      emailW = JSON.parse(localStorage.getItem("userEmail"));
      setValue('ticketEmail', emailW);
    }
    let userRoleW = "";
    if (emailW) {
       
        axios.get(urlRole, { params: { email: emailW } }).then((res) => {
          setUserRole(res.data);
          userRoleW = res.data;
          console.log("userRole", res.data);
          if (
            res.data !== "admin" ||
            res.data === "" ||
            JSON.parse(localStorage.getItem("userEmail")) === null ||
            JSON.parse(localStorage.getItem("userEmail")) === ""
          ) {
            toast.error("Access Denied", { theme: "dark" });
            return;
          } else {
            axios.get(url_getTickets, { params: { email: emailW } }).then((res) => {
                let info1 = [];
                for (let i = 0; i < res.data.length; i++) {
                   info1[i] = res.data[i];
                }
              setTickets(info1);
              console.log('tickets', info1)
               });
          }
        });
      }

  }, []);

 
  const handleChangeSendEmail = (e) => {
    setSendEmail(!sendEmail);
  };
  
  const handleSaveTicket = () => {
    setSubmitStatus("Sending");
    if (ticketEmail){
       const x =  /@/.test(ticketEmail);
       const y =  /\./.test(ticketEmail);
       console.log('x' , x)
       console.log('y' , y)
        if (x===false || y===false) {
          toast.error( 'Please enter a valid email address' );
          return;
        } else {
          setErrors0('');
        }
      }
console.log('ticket', ticket );
console.log('ticketId', ticketId );
console.log('responseTicket', ticketResponse );
console.log('sendEmail', sendEmail );
console.log('ticketEmail', ticketEmail );
    if (email) {
      axios.get(urlRole, { params: { email } }).then((res) => {
        setUserRole(res.data);
        console.log("userRole", res.data);
        if (
          res.data !== "admin" ||
          res.data === "" ||
          JSON.parse(localStorage.getItem("userEmail")) === null ||
          JSON.parse(localStorage.getItem("userEmail")) === ""
        ) {
          toast.error("Access Denied", { theme: "dark" });
          return;
        }
      });
    }
    if (userRole === "admin" || newTicket === true) {
     
    ///console.log('data.signDate',data.signDate)
    if (ticketEmail === "" || ticket === "") {
      toast.error("Please enter data", { theme: "dark" });
    } else {
    
      axios({
        method: "post",
        url: url_saveTicketResponse,
        data: { email: ticketEmail, ticketResponse: ticketResponse, ticketId: ticketId, ticket: ticket, sendEmail: sendEmail, projectId:'', attachedImage:'' },
      })
        .then((response) => {
          if (response.status === 200 || response.status === 202) {
            toast.success("ticket response is sent.", {
              theme: "colored",
            });
          } else {
            toast.error("ticket is not found.", {
              theme: "dark",
            });
          }
        })
        .catch((error) => {
          toast.error("ticket failed to updated.", {
            theme: "dark",
          });
        });

      setSubmitStatus("Done");
    }
    }
  };
 
  const handleNewTicket = () => {
    setNewTicket(true);
    setTicketEmail('');
  }
  const handleTicketResponseChange = (e) => {
    setTicketResponse(e.target.value);
  }


  const handleTicketClick = (ticket) => {
  console.log('ticket', ticket)
  console.log('extractedText', ticket.ticket)
  console.log('ticketEmail', ticket.email)

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = ticket.ticket;
    const extractedText = tempDiv.textContent || tempDiv.innerText;
        setValue("ticket",   extractedText)
        setValue('ticketEmail', ticket.email);
       
       setTicket(extractedText);
       setTicketEmail(ticket.email);
       setTicketId(ticket.ticketId);
       setNewTicket(false);
  };

  const handleTicketChange = (e) => {
    setTicket(e.target.value)
  }

  const handleChangeTicketEmail = (e) => {
    setTicketEmail(e.target.value);

    console.log('e.target.value', e.target.value)
        axios.get(url_getTickets, { params: { email: e.target.value } }).then((res) => {
            let info1 = [];
            for (let i = 0; i < res.data.length; i++) {
               info1[i] = res.data[i];
            }
          setTickets(info1);
          console.log('tickets', info1)
           });
  }
  

  return (
    <div
      className={ticketsFrmShow ? styles.container : styles.inactive}
    >
      <input
        id={styles.email}
        placeholder="Email Address"
        autoFocus
        className={`${errors0 ? styles.errorBorder : styles.Border}`}
        defaultValue=""
        type="email"
        name="ticketEmail"
        value={ticketEmail}
        tabIndex="0"
        onChange={(e) => handleChangeTicketEmail(e)}
       
      />

      <textarea
        type={styles.text}
        id={newTicket ? styles.nTicket :styles.ticket}
        placeholder="Ticket"
        className={`${errors.ticket ? styles.errorBorder : styles.Border}`}
        defaultValue=""
        name="ticket"
        value={ticket}
        tabIndex="0"
        disabled = {!newTicket}
        onChange={e=>handleTicketChange(e)}
        rows={8}  // Specify the number of visible rows
        cols={50}
      />
     

      <textarea  
        type={styles.text}
        id={styles.editor}
        placeholder="Ticket Response"
        className={`${errors.ticketResponse ? styles.errorBorder : styles.Border}`}
        value={ticketResponse}
        name="ticketResponse"
        onChange={e=>handleTicketResponseChange(e)}
        rows={8}  // Specify the number of visible rows
        cols={50} // Specify the number of visible columns
      />

      <input
        id={styles.sendEmail}
        name="sendEmail"
        onChange={e=>handleChangeSendEmail(e)}
        type="checkbox"
      />
      <span id={styles.sendEmailLabel}>Send Email</span>

      {errors.ticket && (
        <p id={styles.cError} role="alert">
          {errors.ticket.message}
        </p>
      )}
      {errors0 && (
        <p id={styles.eError} role="alert">
          {errors0}
        </p>
      )}
      {errors.signDate && (
        <p id={styles.sError} role="alert">
          {errors.signDate.message}
        </p>
      )}
      <button
        id={styles.submit}
        onClick={()=>handleSaveTicket()}
        disabled={isSubmiting}
      >
        {submitStatus}
      </button>
      
      <button
        id={styles.newTicket}
        onClick={()=>handleNewTicket()}
      >
        New Ticket
      </button>
     
       
      <Table className={styles.table} striped>
        <thead className={styles.header}>
          <tr>
            <th colSpan={1} className={styles.head1}>
              Id
            </th>
            <th colSpan={1} className={styles.head1}>
              File
            </th>
            <th colSpan={3}>ticket</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {tickets.map((ticket) => (
            <tr
              key={ticket.id}
              onClick={() => handleTicketClick(ticket)}
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedRow === ticket.id ? "lightblue" : "white",
              }}
            >
              <td className={styles.tbody} colSpan={1}>
                {ticket.ticketId} 
              </td>
              <td className={styles.tbody} colSpan={1}>
                {ticket.attachedImage}
              </td>
              <td className={styles.tbody} colSpan={3}>
                 <div dangerouslySetInnerHTML={{ __html: ticket.ticket }} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Tickets;
