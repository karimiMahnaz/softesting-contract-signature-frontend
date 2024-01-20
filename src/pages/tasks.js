import React, { useContext, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
//import FocusLock from 'react-focus-lock';
//import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GridLayout from "react-grid-layout";
import Select from "react-select";

//import { OsTypes } from 'react-device-detect';
//import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';
import { VisibilityContext } from "../contexts/visibilityContext";

import styles from "../styles/tasks.module.scss";

const Tasks = () => {
  const [submitStatus, setSubmitStatus] = useState("Submit");
  const { tasksFrmShow } = useContext(VisibilityContext);
  const {
    register,
    handleSubmit,
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

  document.title = "SofTesting | Tasks";

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [taskStatus, setTaskStatus] = useState(null);
  const [sendEmail, setSendEmail] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [projectInfo, setProjectInfo] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
 
  //   const projectList = [
  //     { value: '1', label: 'Option 1' },
  //     { value: '2', label: 'Option 2' },
  //     { value: '3', label: 'Option 3' },
  //   ];

  const location = window.location.hostname;
  let getUrl = "";

  // if (location === "localhost") {
  //   getUrl = `http://${location}:8000/api/task/getProjects`;
  // } else {
  getUrl = `https://api.softestingca.com/api/task/getProjects`;
  // }

  useEffect(() => {
    let emailW = "";
    setEmail(JSON.parse(localStorage.getItem("userEmail")));
    //console.log(JSON.parse(localStorage.getItem("userEmail")));
    if (JSON.parse(localStorage.getItem("userEmail"))) {
      emailW = JSON.parse(localStorage.getItem("userEmail"));
    }

    axios.get(getUrl, { params: { email: emailW } }).then((res) => {
      let projectList0 = [];
      for (let i = 0; i < res.data.length; i++) {
        const projectItem = {
          value: (projectList[(i, 0)] = res.data[i].projectId),
          label: (projectList[(i, 1)] = res.data[i].projectName),
        };
        projectList0.push(projectItem);
      }
      setProjectList(projectList0);
      console.log("res.data.length", res.data.length);
      console.log("projectList", projectList);
    });
  }, []);

  const onSubmit = (data, e) => {
    setSubmitStatus("Sending");

    let url = "",
      url_file = "",
      key = "",
      url_saveTask = "",
      url_fileName = "",
      urlRole = "";
    console.log("", data);
    // if (location === "localhost") {
    //   url = `http://${location}:8000/api/task/saveProject`;
    //   urlRole = `http://${location}:8000/api/user/userRole`;

    //   if (selectedFiles) {
    //     url_file = `http://${location}:8000/api/file`;
    //     key = "myFile";
    //     url_fileName = `http://${location}:8000/api/task/updateProject`;
    //   }
    // } else {
    url = `https://api.softestingca.com/api/task/saveProject`;
    urlRole = `https://api.softestingca.com/api/user/userRole`;
    url_saveTask = `https://api.softestingca.com/api/task/saveTask`;
    
    if (selectedFiles) {
      url_file = "https://api.softestingca.com/api/file";
      key = "myFile";
    }
    //  }

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
 
    projectName? setValue("projectName", projectName.label): null;
   
    if (userRole === 'admin') {
    if (data.email === "" || (data.projectName === "" && projectName.label =="") || data.ownerName === "") {
      toast.error("Please enter data", { theme: "dark" });
    } else {
      axios({
        method: "post",
        url: url,
        data: data,
      })
        .then(({ data, status }) => {
          if (status === 455) {
            toast.success("Access Denied", { theme: "dark" });
            return;
          }
          if (status === 200) {
            toast.success("Project insert Is Done.", { theme: "colored" });
          } else if (status === 202) {
            toast.success("Project update Is Done.", { theme: "colored" });
          } else {
            toast.success("failed to save project.", { theme: "dark" });
            return;
          }
        })
        .catch((ex) => {
          toast.error("failed to save.", { theme: "dark" });
        });

        axios({
            method: "post",
            url: url_saveTask,
            data:{data , projectId: projectName? projectName.value : 0},
          })
            .then((response) => {
              if (response.status === 200) {
                toast.success("Task is inserted.", {
                  theme: "colored",
                });
              } else {
                toast.error("projectName is not found.", {
                  theme: "dark",
                });
              }
            })
            .catch((error) => {
              toast.error("Task failed to inserted.", {
                theme: "dark",
              });
            });

      let formData = new FormData();
      formData.append(`${key}`, selectedFiles);

      if (selectedFiles) {
        console.log('selectedFiles', selectedFiles)
        axios({
          method: "post",
          url: url_file,
          data: formData,

          headers: {
            "content-type": "multipart/form-data",
            category: data.email.replace(" ", "").trim() + "_tasks",
          },
        })
          .then((response) => {
            // console.log("response file", response);
            // console.log("data.email", data.email);
            // console.log("projectName", data.projectName);
            toast.success("image is uploaded.", {
                theme: "colored",
              });
          })
          .catch((error) => {
            //  console.log("error file", error.response);
            //  console.log("error file", error.request);
            //  console.log("error file", error.message);
            toast.error("File failed to upload.", { theme: "dark" });
          });
      }

      setSubmitStatus("Done");
    }
    }
  };

  const onChangeFile = (e) => {
    var file0 = e.target.files[0];

    setSelectedFiles(e.target.files[0]);
    setFile(file0);
    setFileName(e.target.files[0].name)
   // setValue("projectName", file0.name);
  };

  const onClickFile = (e) => {
    setSelectedFiles(null);
  };

  const handleChangeSendEmail = (e) => {
    setSendEmail(e.target.value);
  };

  const handleItem = (e) => {
    setValue("projectName", e.label);
    setValue("projectId", e.value);
    setProjectName(e);
  };

  const layout = [{ i: "a", x: 0, y: 0, w: 1, h: 2, static: true }];
  console.log('errors', errors)
  return (
    <form
      className={tasksFrmShow ? styles.container : styles.inactive}
      onSubmit={handleSubmit(onSubmit)}
    >
      <button
        type="submit"
        id={styles.submit}
        tabIndex="0"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmiting}
      >
        {submitStatus}
      </button>

      <Select
        {...register("projectId")}
        id={styles.selectProject}
        options={projectList}
        isSearchable
        placeholder="Select or type..."
        tabIndex="0"
        onChange={e => handleItem(e)}
        // onChange={setProjectName}
      />

      <input
        type={styles.text}
        id={styles.projectName}
        autoFocus
        placeholder="Project Name"
        className={`${errors.projectName ? styles.errorBorder : styles.Border}`}
        defaultValue={projectName ? projectName.label : ""}
        name="projectName"
        tabIndex="0"
        {...register("projectName", {
         // required: "*",
          minLength: (4, "*"),
          maxLength: (150, "*"),
        })}
      />

      <input
        id={styles.email}
        placeholder="Email Address"
        className={`${errors.email ? styles.errorBorder : styles.Border}`}
        defaultValue=""
        type="email"
        name="email"
        tabIndex="0"
        {...register("email", {
          required: "*",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "*",
          },
        })}
      />

      <input
        type={styles.text}
        id={styles.ownerName}
        placeholder="Owner Name"
        className={`${errors.ownerName ? styles.errorBorder : styles.Border}`}
        defaultValue=""
        name="ownerName"
        tabIndex="0"
        {...register("ownerName", {
          required: "*",
          minLength: (4, "*"),
          maxLength: (150, "*"),
        })}
      />

      <input
        type={styles.text}
        id={styles.task}
        placeholder="Task"
        className={`${errors.task ? styles.errorBorder : styles.Border}`}
        defaultValue=""
        name="task"
        tabIndex="0"
        {...register("task", {
          required: "*",
          minLength: (4, "*"),
          maxLength: (500, "*"),
        })}
      />

      <input
        type={styles.text}
        id={styles.role}
        placeholder="Role"
        className={`${errors.role ? styles.errorBorder : styles.Border}`}
        defaultValue=""
        name="role"
        tabIndex="0"
        {...register("role", {
          required: "*",
          minLength: (4, "*"),
          maxLength: (500, "*"),
        })}
      />

      <Select
        {...register("taskStatus")}
        id={styles.taskStatus}
        options={[
          { value: "To Do", label: "To Do" },
          { value: "Done", label: "Done" },
          { value: "Waiting", label: "Waiting" },
          { value: "Processing", label: "Processing" },
        ]}
        placeholder="Select status"
        tabIndex="0"
        onChange={setTaskStatus}
      />

      <div className={styles.dates}>
        <label className={styles.startLabel}> Duration____From : </label>
        <Controller
          control={control}
          name="startDate"
          defaultValue={startDate}
          {...register("startDate", {
             required: "*",
          })}
          className={`${errors.startDate ? styles.errorBorder : styles.Border}`}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <DatePicker
              className={styles.startDate}
              placeholderText="Start Date"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
            />
          )}
        />
        <label className={styles.endLabel}>to : </label>
        <Controller
          control={control}
          name="endDate"
          defaultValue={endDate}
          {...register("endDate", {
            required: "*",
          })}
          className={`${errors.endDate ? styles.errorBorder : styles.Border}`}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <DatePicker
              className={styles.endDate}
              placeholderText="End Date"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
            />
          )}
        />
      </div>

      <input
        type="file"
        placeholder="upload file"
        id={styles.file}
        multiple
        name="fileInput"
        {...register("fileInput")}
        accept="pdf|png|jpg|jpeg|JPG|JPEG|PNG|PDF"
        onChange={onChangeFile}
        onClick={onClickFile}
      />
       {fileName && <p  id={styles.attachedFile} > {fileName} is attached  </p>}

      <input
        id={styles.sendEmail}
        name="sendEmail"
        onChange={handleChangeSendEmail}
        type="checkbox"
        {...register("sendEmail")}
      />
 
      <span id={styles.sendEmailLabel}>Send Email</span>

      {errors.projectName && (
        <p id={styles.pError} role="alert">
          {errors.projectName.message}
        </p>
      )}
      {errors.ownerName && (
        <p id={styles.oError} role="alert">
          {errors.ownerName.message}
        </p>
      )}
      {errors.email && (
        <p id={styles.eError} role="alert">
          {errors.email.message}
        </p>
      )}
       {errors.role && (
        <p id={styles.rError} role="alert">
          {errors.role.message}
        </p>
      )}
       {errors.task && (
        <p id={styles.tError} role="alert">
          {errors.task.message}
        </p>
      )}
      {errors.startDate && (
        <p className={styles.startError} role="alert">
          {errors.startDate.message}
        </p>
      )}
       {errors.endDate && (
        <p id={styles.endError} role="alert">
          {errors.endDate.message}
        </p>
      )}
     
    </form>
  );
};
export default Tasks;
