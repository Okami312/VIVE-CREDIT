import { useState } from 'react';
import '../style/scorecard.css';
import type { Variable } from '../types/Scorecard.types';
import { ScorecardVariablesModal } from '../components/scorecard-components/ScorecardVariablesModal';

export const ScorecardEngine: React.FC = () => {
  const [scoreValue, setScoreValue] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [variables, setVariables] = useState<Variable[]>([]);
  const [editingVariable, setEditingVariable] = useState<Variable | null>(null);
  const [openRow, setOpenRow] = useState<string | null>(null);

  const handleScoreValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      setError('');
      setScoreValue('');
      return;
    }

    if (value.length > 1 && value.startsWith('0')) {
      setError('Numărul nu poate începe cu 0!');
      return;
    }

    if (Number(value) > 1001) {
      return;
    }

    if (Number(value) < 0) {
      setError('Numărul trebuie să fie pozitiv!');
      return;
    }

    setError('');
    setScoreValue(value);
  };

  const handleAddOrUpdateVariable = (variable: Variable) => {
    if (editingVariable) {
      setVariables(variables.map((v) => (v.id === variable.id ? variable : v)));
    } else {
      setVariables([...variables, variable]);
    }

    setShowModal(false);
    setEditingVariable(null);
  };

  const handleEditVariable = (variable: Variable) => {
    setEditingVariable(variable);
    setShowModal(true);
  };

  const handleDeleteVariable = (id: string) => {
    setVariables(variables.filter((v) => v.id !== id));
  };

  const displayVariableName = (name: string) => {
    switch (name) {
      case 'venit':
        return 'Venit';
      case 'varsta':
        return 'Vârstă';
      case 'sector':
        return 'Sector';
      case 'istorice':
        return 'Istoric';
      case 'kyc':
        return 'KYC Flags';
      default:
        return name;
    }
  };

  const handleShowModalRules = (rowId: string) => {
    setOpenRow(openRow === rowId ? null : rowId);
  };

  const totalWeight = variables.reduce((sum, v) => sum + v.weight, 0);
  const isWeightValid = totalWeight.toFixed(2) === '1.00';

  return (
    <>
      <div className="bg-white mx-auto shadow-2xl rounded-xl p-6 max-w-3xl">
        <h1 className="text-md lg:text-lg font-bold text-center">
          Scorecard Engine Configuration
        </h1>
        <div className="flex flex-col md:flex-row gap-2 md:justify-between mt-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label className="font-semibold">
                Scor Maxim Posibil (<span className="text-blue-600">0</span> -{' '}
                <span className="text-blue-600">1000</span>):{' '}
              </label>
              <input
                type="number"
                min="1"
                value={scoreValue}
                onChange={handleScoreValueChange}
                className="text-blue-600 ml-1 border border-gray-200 rounded-md text-center max-w-10 sm:max-w-20 font-semibold  no-spinner focus:outline-none focus:border-blue-300"
              />
            </div>
            {error && (
              <span className="text-red-500 text-[10px] text-end w-full">
                {error}
              </span>
            )}
          </div>
          <p className="font-semibold">
            Total ponderi:{' '}
            <span className="text-blue-600 border border-gray-200 rounded-md text-center max-w-10 sm:max-w-20 font-semibold   px-3 py-1">
              {totalWeight.toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex justify-between mt-10">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white border border-gray-300 shadow-md px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            Adaugă variabilă
          </button>
          <button
            disabled={!isWeightValid}
            className="bg-blue-500 px-4 py-2 disabled:bg-gray-400 text-white rounded-lg shadow-md hover:bg-blue-500/90"
          >
            Salvează
          </button>
        </div>
        {variables.length !== 0 ? (
          <div>
            {/* Desktop */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden mt-6">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 border">Nume variabilă</th>
                    <th className="p-3 border">Tip</th>
                    <th className="p-3 border">Pondere</th>
                    <th className="p-3 border">Nr. reguli</th>
                    <th className="p-3 border text-center">Activă</th>
                    <th className="p-3 border text-center">Acțiuni</th>
                  </tr>
                </thead>
                <tbody>
                  {variables.map((v) => (
                    <tr
                      key={v.id}
                      className="hover:bg-gray-50 transition capitalize"
                    >
                      <td className="p-3 border font-medium  ">
                        {displayVariableName(v.name)}
                      </td>
                      <td className="p-3 border ">
                        {' '}
                        {v.type === 'boolean' ? (
                          <div className="flex flex-col ">
                            <span>{v.type}</span>
                            <span>
                              ({v.booleanV === 'true' ? 'Adevărat' : 'Fals'})
                            </span>
                          </div>
                        ) : (
                          <span>{v.type}</span>
                        )}
                      </td>
                      <td className="p-3 border text-center">
                        {v.weight.toFixed(2)}
                      </td>
                      <td className="p-3 border text-center relative">
                        {v.rules.length === 0 ? (
                          v.rules.length
                        ) : (
                          <div className="flex flex-col">
                            {v.rules.length}
                            <button
                              onClick={() => handleShowModalRules(v.id)}
                              className="text-xs border border-gray-300 rounded-md text-blue-500 font-bold hover:bg-gray-100 hover:text-blue-400"
                            >
                              Reguli
                            </button>
                            {openRow === v.id && (
                              <div className="absolute bg-white shadow-xl rounded-md border px-4 py-2 overflow-y-auto max-h-24 max-w-30 z-10 mb-50 top-[-60%] left-1/2 transform -translate-x-1/2">
                                {v.rules.map((rule, i) => (
                                  <div
                                    key={i}
                                    className="flex justify-between border-b"
                                  >
                                    <div className="flex flex-col  ">
                                      <p className="text-xs text-left">
                                        Condiție:
                                      </p>
                                      <p className="text-blue-500 text-xs text-left">
                                        {rule.condition}
                                      </p>
                                    </div>
                                    <div className="flex flex-col px-4 ">
                                      <p className="text-xs text-left">Scor:</p>
                                      <p className="text-blue-800 text-xs font-semibold text-left">
                                        {rule.score}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                                <button
                                  onClick={() => setOpenRow(null)}
                                  className="mt-2 text-xs bg-blue-500 text-white rounded px-2 py-1 w-full"
                                >
                                  Închide
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                      <td className="p-3 border text-center">
                        {v.active ? 'Da' : 'Nu'}
                      </td>
                      <td className="p-3 border text-center space-x-2">
                        <button
                          className="border border-gray-400 rounded-md py-1 px-3 hover:text-gray-600 text-sm"
                          onClick={() => handleEditVariable(v)}
                        >
                          Editează
                        </button>

                        <button
                          className="text-red-600 border border-gray-400 rounded-md py-1 px-3 hover:text-red-400 text-sm"
                          onClick={() => handleDeleteVariable(v.id)}
                        >
                          Șterge
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile  */}

            <div className="block sm:hidden flex flex-col gap-4 mt-6">
              {variables.map((v) => (
                <div
                  key={v.id}
                  className="border rounded-lg p-4 shadow-sm bg-white  flex flex-col gap-2"
                >
                  <div className="capitalize">
                    <span className="font-semibold">Nume variabilă: </span>
                    {displayVariableName(v.name)}
                  </div>
                  <div className="capitalize">
                    <span className="font-semibold">Tip: </span>
                    {v.type === 'boolean'
                      ? `${v.type} (${
                          v.booleanV === 'true' ? 'Adevărat' : 'Fals'
                        })`
                      : v.type}
                  </div>
                  <div>
                    <span className="font-semibold">Pondere: </span>
                    {v.weight.toFixed(2)}
                  </div>
                  <div>
                    <span className="font-semibold">Nr. reguli: </span>
                    {v.rules.length}
                  </div>
                  <div>
                    <span className="font-semibold">Activă: </span>
                    {v.active ? 'Da' : 'Nu'}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="border border-gray-400 rounded-md py-1 px-3 hover:text-gray-600 text-sm"
                      onClick={() => handleEditVariable(v)}
                    >
                      Editează
                    </button>
                    <button
                      className="text-red-600 border border-gray-400 rounded-md py-1 px-3 hover:text-red-400 text-sm"
                      onClick={() => handleDeleteVariable(v.id)}
                    >
                      Șterge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {showModal && (
        <ScorecardVariablesModal
          onClose={() => setShowModal(false)}
          onSave={(variable) => handleAddOrUpdateVariable(variable)}
          initialVariable={editingVariable}
        />
      )}
    </>
  );
};
