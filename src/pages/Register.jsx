const Register = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Register</h2>
          <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-2 p-2 border rounded" />
          <button className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
        </div>
      </div>
    );
  };
  
  export default Register;