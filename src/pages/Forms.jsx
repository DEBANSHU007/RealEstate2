import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import FormBuilder from '../components/form/FormBuilder';
import FormList from '../components/form/FormList';

function Forms() {
  const [forms, setForms] = useState([]);
  const [showBuilder, setShowBuilder] = useState(false);
  const [formName, setFormName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [fields, setFields] = useState([]);

  const [categories] = useState([
    { id: '1', name: 'Residential Properties', image: 'https://example.com/residential.jpg', createdAt: new Date() },
    { id: '2', name: 'Commercial Properties', image: 'https://example.com/commercial.jpg', createdAt: new Date() },
  ]);

  const addField = () => {
    const newField = {
      id: Date.now().toString(),
      label: '',
      type: 'text',
      required: false,
    };
    setFields([...fields, newField]);
  };

  const updateField = (id, updates) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, ...updates } : field
    ));
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const handleSave = () => {
    if (!formName || !selectedCategory || fields.length === 0) return;

    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return;

    const newForm = {
      id: Date.now().toString(),
      name: formName,
      category: category.name,
      fields,
      createdAt: new Date(),
    };

    setForms([...forms, newForm]);
    resetBuilder();
  };

  const resetBuilder = () => {
    setShowBuilder(false);
    setFormName('');
    setSelectedCategory('');
    setFields([]);
  };

  const handleEdit = (form) => {
    setFormName(form.name);
    const category = categories.find(c => c.name === form.category);
    setSelectedCategory(category?.id || '');
    setFields(form.fields);
    setShowBuilder(true);
  };

  const handleDelete = (id) => {
    setForms(forms.filter(form => form.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Form Builder</h1>
        <button
          onClick={() => setShowBuilder(!showBuilder)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          {showBuilder ? 'Cancel' : <><Plus className="w-4 h-4" /> Create New Form</>}
        </button>
      </div>

      {showBuilder && (
        <FormBuilder
          formName={formName}
          selectedCategory={selectedCategory}
          categories={categories}
          fields={fields}
          onFormNameChange={setFormName}
          onCategoryChange={setSelectedCategory}
          onAddField={addField}
          onUpdateField={updateField}
          onRemoveField={removeField}
          onSave={handleSave}
        />
      )}

      <FormList
        forms={forms}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Forms;