import React, { useEffect,useState } from 'react';

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [parentProject, setParentProject] = useState('');

const [formData, setFormData] = useState({
    title: '',
    parentProject: '',
    color: '',
  });
  const [color, setColor] = useState('#000000');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/project/getprojects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };
    fetchProjects();
  }, []);

  // Removed duplicate handleColorChange to fix redeclaration error.
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Removed duplicate handleSubmit function to resolve redeclaration error.
  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };
  const handleParentProjectChange = (e) => {
    setParentProject(e.target.value);
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const handleColorChange = (e) => {
    setColor(e.target.value);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      title,
      parentProject,
      color,
    };
    setProjects([...projects, newProject]);
    setTitle('');
    setParentProject('');
    setColor('#000000'); // Reset color to default
  }


  const [showForm, setShowForm] = useState(false);



  const sendProjectToDatabase = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/project/getprojects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, parentProject }),
      });
      if (!response.ok) {
        throw new Error('Failed to create project');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendProjectToDatabase();
    if (result) {
      console.log('Project created:', result);
      setIsOpen(false);
    }
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[160%]">
        <h2 className="text-2xl font-bold text-white mb-6">New Project</h2>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="The project's title goes here..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Parent Project</label>
          <input
            type="text"
            value={parentProject}
            onChange={(e) => setParentProject(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type to search for a project..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Color</label>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-gray-600 flex items-center justify-center">
              <span className="text-white text-xs">🎨</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-4 px-4 py-2 text-gray-400 hover:text-gray-200"
            onClick={handleCancel}
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;