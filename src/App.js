import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Multiselect from 'multiselect-react-dropdown';

const App = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [mod3Options, setMod3Options] = useState([]);
  const [selectedMod3, setSelectedMod3] = useState([]);

  useEffect(() => {
    fetch("/dataset_small.json")
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFiltered(json);
        const uniqueMod3 = [...new Set(json.map(d => d.mod3))];
        setMod3Options(uniqueMod3.map(v => ({ name: v })));
      });
  }, []);

  useEffect(() => {
    if (selectedMod3.length > 0) {
      const values = selectedMod3.map(s => s.name);
      const filteredData = data.filter(d => values.includes(d.mod3));
      setFiltered(filteredData);
    } else {
      setFiltered(data);
    }
  }, [selectedMod3]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Filter Dashboard</h2>
      <Multiselect
        options={mod3Options}
        displayValue="name"
        onSelect={setSelectedMod3}
        onRemove={setSelectedMod3}
        placeholder="Filter by mod3"
      />
      <DataTable
        columns={Object.keys(data[0] || {}).map(key => ({ name: key, selector: row => row[key], sortable: true }))}
        data={filtered}
        pagination
        paginationPerPage={100}
        fixedHeader
        fixedHeaderScrollHeight="400px"
      />
    </div>
  );
};

export default App;
