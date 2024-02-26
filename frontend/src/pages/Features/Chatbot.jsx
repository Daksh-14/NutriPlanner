import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { BackButton } from '../../components/BackButton';
import { Loading } from '../../components/Loading';
import '../../styles/chatbot.css';

export const Chatbot = () => {
  const [output,setOutput] = useState({});
  const [isoutput,setIsOutput] = useState(false);
  const [inputData,setInputData] = useState({
    chat:""
  });
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
      const submitData = async()=>{
        try {
          setLoading(true);
          const response = await axios.post('api/chatbot',inputData);
          output(response.data);
          setIsOutput(true);
        } catch (error) {
          console.log(error);
        }
        finally{
          setLoading(false);
        }
    }
    submitData();
  }

  const onChangeHandler = (e)=>{
      const {name,value} = e.target;
      setInputData((prevData)=>{
        return {
          ...prevData,
          [name] : value
        }
      })
  }

  const styles = {
    cursor : 'pointer'
  }

  return (
    <>
      <BackButton />
    <div className='main-chatbot-container'>
      <div className="chatbot-container">
          {loading && <Loading />}
          {isoutput && 
              <div className="output-section">
                  <h1 className="output-heading">{output}</h1>
              </div>
          }
          <form className='chatbot-form' onSubmit={handleSubmit}>
              <input
                  type="text"
                  className="chat-input"
                  placeholder='Ask Anything...'
                  id="chat"
                  name="chat"
                  value={inputData.chat}
                  onChange={onChangeHandler}
                  
              />
              <IoSend style={styles} size={30} onClick={handleSubmit} />
          </form>
      </div>
    </div>
    </>
  );
}
