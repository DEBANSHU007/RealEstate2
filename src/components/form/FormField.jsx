import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';

function FormField({ field, onUpdate, onRemove }) {
  const fieldTypes = ['text', 'select', 'multiselect'];

  const addOption = () => {
    const options = field.options || [];
    onUpdate({ options: [...options, ''] });
  };

  const updateOption = (index, value) => {
    const options = [...(field.options || [])];
    options[index] = value;
    onUpdate({ options });
  };

  const removeOption = (index) => {
    const options = field.options?.filter((_, i) => i !== index) || [];
    onUpdate({ options });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Field Label
          </label>
          <input
            type="text"
            value={field.label}
            onChange={(e) => onUpdate({ label: e.target.value })}
            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            placeholder="Enter field label"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Field Type
          </label>
          <select
            value={field.type}
            onChange={(e) => onUpdate({ type: e.target.value })}
            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            {fieldTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {(field.type === 'select' || field.type === 'multiselect') && (
        <div className="mt-4 border-t pt-4 dark:border-gray-600">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Options</label>
            <button
              type="button"
              onClick={addOption}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 text-sm"
            >
              <Plus className="w-4 h-4" /> Add Option
            </button>
          </div>
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => updateOption(index, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  placeholder={`Option ${index + 1}`}
                />
                <button
                  onClick={() => removeOption(index)}
                  className="text-red-600 hover:text-red-700 dark:text-red-400"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-end">
        <button
          onClick={onRemove}
          className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default FormField;