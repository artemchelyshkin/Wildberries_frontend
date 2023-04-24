import React,{ useState }  from 'react';
import './App.css';



function App() {
  const [filebase64,setFileBase64] = useState<string>("")



  function formSubmit(e: any) {
    e.preventDefault();
    console.log({filebase64})
    alert("here you'd submit the form using\n the filebase64 like any other field")
  }



  function convertFile(files: FileList|null) {
    if (files) {
      const fileRef = files[0] || ""
      const fileType: string= fileRef.type || ""
      const reader = new FileReader()
      reader.readAsBinaryString(fileRef)
      reader.onload=(ev: any) => {
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
      }
    }
  }

  return (
        <div style={{ backgroundColor: 'rgb(225, 246, 255)', height: '100vh' }}>

          <div style={{ backgroundColor: 'white', height: '100px', boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)' }}>
              <div style={{ padding: '40px 0px 0px 150px' }}>НашПроект</div>
          </div>
          <form onSubmit={formSubmit}>
            {(filebase64.indexOf("image/") <= -1) && <input type="file" onChange={(e)=> convertFile(e.target.files)} style={{
               display: "block",
               margin: "0 auto",
               top: "50%",
               width: "750px",
               height: '40px',
               border: "3px solid gray",
               padding: '463px 0px 0px 200px'}}/>}

            <hr />

           {
              filebase64 &&
              <>
              {(filebase64.indexOf("image/") > -1) && <div className="tmp">
                <p style={{position: 'relative', padding:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>}
              </>
            }
        </form>


        <form onSubmit={formSubmit}>
           {
              filebase64 &&
              <>
              {(filebase64.indexOf("image/") > -1) && <img src={filebase64} width={750} style={{
               display: "block",
               margin: "0 auto",
               top: "15%",
               left: "25%"}} />}
              </>
           }
        </form>


        <form onSubmit={formSubmit}>
           {(filebase64.indexOf("image/") > -1) && <input type="file" onChange={(e)=> convertFile(e.target.files)} style={{
               display: "block",
               margin: "0 auto",
               top: "50%"}} /> }
        </form>





        </div>);}


export default App;
