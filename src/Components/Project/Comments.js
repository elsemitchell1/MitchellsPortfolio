import React, {useEffect,useState} from 'react'

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`https://portfolio-server-yqaw.onrender.com/comments/${props.project.name}`);
        const data = await response.json();
        setComments(data);
      }catch(error){
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [props.project.name]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    const newComment = {projectName: props.project.name, name, message};
    try{
      const response = await fetch('https://portfolio-server-yqaw.onrender.com/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })
      const data = await response.json();
      setComments([...comments, data]);
      setShowForm(false);
      setName('');
      setMessage('');
    } catch(error){
      console.log(error);
    }
  }

  const reveal = () => {
    if(comments.length > 0){
        setShowComments(!showComments);
    }
  }
  return (
    <div className={`${showComments && 'max-h-40'} flex flex-col p-3 text-black bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-b-2xl`}>
        {loading ? (<p className='mb-2 text-xs w-fit'>Loading Comments...</p>) : showComments ? (
            <div className='relative'>
            <button onClick={reveal} className='absolute top-0 right-0'>✖</button>
            <div className='h-[90px] overflow-y-scroll'>
            {comments.map((comment, index) => (
                <div key={index} className='mb-2'>
                <h5 className='text-sm font-bold'>{comment.name}</h5>
                <p className='text-xs'>{comment.message}</p>
                </div>
            ))}
            </div>
            </div>
            ) : (
            <button className='mb-2 text-xs w-fit' onClick={reveal}>Show {comments.length} Comments...</button>
        )}
        <button onClick={() => setShowForm(!showForm)} className='w-full p-px mt-1 font-semibold text-white bg-black rounded-lg w-fit'>Add Comment</button>
        {showForm && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative w-72 p-4 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-lg'>
                <div className='flex justify-center mb-3'>
                    <h4 className='font-semibold text-md'>Project: {props.project.name}</h4>
                </div>
                <button onClick={() => setShowForm(false)} className='absolute top-2 right-2'>✖</button>
                <form onSubmit={handleAddComment}>
                    <input 
                    type='text' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder='Your name' 
                    className='w-full mb-2 text-[16px] border rounded p-[1px]'
                    required={true}
                    />
                    <textarea 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder='Your comment' 
                    className='w-full mb-2 text-[16px] border rounded p-[1px]'
                    rows={3}
                    required={true}
                    ></textarea>
                    <button type='submit' className='w-full bg-white rounded-lg'>Submit</button>
                </form>
            </div>
          </div>
        )}
      </div>
  )
}

export default Comments;