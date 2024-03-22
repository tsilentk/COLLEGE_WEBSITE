import pyodbc
conn=pyodbc.connect('DRIVER=SQL SERVER;SERVER=LAPTOP-HLCPCTCT\SQLEXPRESS01;DATABASE=asct;')
 


import uvicorn
from fastapi import FastAPI ,Response
from fastapi.responses import HTMLResponse,FileResponse

app=FastAPI()



@app.get("/insert_data")

def insert_table(name,email,phone,course,gender,dob,Address,City,State,Pincode):

    result=conn.execute(f"insert into form values('{name}','{email}',{phone},'{course}','{gender}','{dob}','{Address}','{City}','{State}',{Pincode})")
    result.commit()
    return FileResponse('formsubmit.html')




if __name__=='__main__':
    uvicorn.run(app=app,host='127.0.0.1',port=8090)
