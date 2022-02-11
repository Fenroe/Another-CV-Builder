import DataEntry from './components/DataEntry/DataEntry';
import React, { useState } from 'react';

function App() {
  const [personalInfo, setPersonalInfo] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      website: "",
    }
  );

  const [statement, setStatement] = useState(
    ""
  );

  const [keySkills, setKeySkills] = useState(
    [
      {
        index: 1,
        skill: "",
      }
    ]
  );

  const [employmentHistory, setEmploymentHistory] = useState(
    [
      {
        index: 1,
        jobTitle: "",
        company: "",
        startDate: null,
        endDate: null,
        description: "",
      }
    ]
  );

  const [education, setEducation] = useState(
    [
      {
        index: 1,
        qualification: "",
        institution: "",
        startDate: null,
        endDate: null,
        description: "",
      }
    ]
  )

  return (
    <div className="App">
      <h1>Another CV Helper</h1>
      <DataEntry 
      personalInfo = {personalInfo}
      setPersonalInfo = {setPersonalInfo}
      statement = {statement}
      setStatement = {setStatement}
      keySkills = {keySkills}
      setKeySkills = {setKeySkills}
      employmentHistory = {employmentHistory}
      setEmploymentHistory = {setEmploymentHistory}
      education = {education}
      setEducation = {setEducation}
      />
    </div>
  );
}

export default App;
