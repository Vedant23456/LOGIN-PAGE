import React, { useState } from 'react';

function Dashboard() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    website: '',
  });

  const [entryList, setEntryList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    const entryToEdit = entryList[index];
    setFormData(entryToEdit);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = [...entryList];
    updatedList.splice(index, 1);
    setEntryList(updatedList);
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.password || !formData.website) {
      alert('Please fill in all fields.');
      return;
    }

    if (editIndex !== null) {
      const updatedList = [...entryList];
      updatedList[editIndex] = formData;
      setEntryList(updatedList);
      setFormData({ username: '', password: '', website: '' });
      setEditIndex(null);
    } else {
      setEntryList([...entryList, formData]);
      setFormData({ username: '', password: '', website: '' });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Form</h2>
        <div className="mb-2">
      <div className="fixed bottom-4 right-4 text-lg font-bold text-gray-300 pointer-events-none z-50">
        VEDANT'S HUB
      </div>
 
          <input
            type="text"
            placeholder="Username"
            className="w-48 px-3 py-2 border rounded-md"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            placeholder="Password"
            className="w-48 px-3 py-2 border rounded-md"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Website"
            className="w-48 px-3 py-2 border rounded-md"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={handleSubmit}
        >
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </div>

      <table className="w-full max-w-sm border-collapse border bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">USERNAME</th>
            <th className="border p-2">PASSWORD</th>
            <th className="border p-2">WEBSITE</th>
            <th className="border p-2">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {entryList.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.username}</td>
              <td className="border p-2">{entry.password}</td>
              <td className="border p-2">{entry.website}</td>
              <td className="border p-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2 hover:bg-green-600"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
