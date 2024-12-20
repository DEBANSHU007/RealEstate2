import React from 'react';

function LocationForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const locationData = {
      name: formData.get('name'),
      state: formData.get('state'),
    };

    onSubmit(locationData);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Location Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Hubli"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            name="state"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Karnataka"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Add Location
        </button>
      </div>
    </form>
  );
}

export default LocationForm;