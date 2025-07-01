import React, { useState } from 'react';
import {
  Box, Tabs, Tab, TextField, MenuItem, RadioGroup, FormControlLabel,
  Radio, Button, FormControl, InputLabel, Select, Checkbox, Typography
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const ArchivalRequestForm = () => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    projectName: '',
    policyType: 'policyBased',
    policyName: '',
    dataAvailableInABC: false,
    retentionPeriod: '',
    archivalDate: null,
    archivalFrequency: '',
    archivalLocation: '',
  });

  const handleChange = (field) => (event) => {
    const value = field === 'dataAvailableInABC'
      ? event.target.checked
      : event.target.value;

    setFormData({ ...formData, [field]: value });
  };

  const handleDateChange = (newDate) => {
    setFormData({ ...formData, archivalDate: newDate });
  };

  const handleClear = () => {
    setFormData({
      projectName: '',
      policyType: 'policyBased',
      policyName: '',
      dataAvailableInABC: false,
      retentionPeriod: '',
      archivalDate: null,
      archivalFrequency: '',
      archivalLocation: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
        <Tab label="Archival Request" />
        <Tab label="Archival History" />
      </Tabs>

      {tabValue === 0 && (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, p: 2, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
          {/* Project Name Dropdown */}
          <FormControl fullWidth>
            <InputLabel>Project Name</InputLabel>
            <Select value={formData.projectName} onChange={handleChange('projectName')} label="Project Name">
              <MenuItem value="Project A">Project A</MenuItem>
              <MenuItem value="Project B">Project B</MenuItem>
              <MenuItem value="Project C">Project C</MenuItem>
            </Select>
          </FormControl>

          {/* Policy Type Radio Buttons */}
          <FormControl>
            <Typography variant="subtitle1" gutterBottom>Policy Type</Typography>
            <RadioGroup row value={formData.policyType} onChange={handleChange('policyType')}>
              <FormControlLabel value="policyBased" control={<Radio />} label="Policy Based" />
              <FormControlLabel value="custom" control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>

          {/* Conditional Policy Dropdown */}
          {formData.policyType === 'policyBased' && (
            <FormControl fullWidth>
              <InputLabel>Policy</InputLabel>
              <Select value={formData.policyName} onChange={handleChange('policyName')} label="Policy">
                <MenuItem value="Policy A">Policy A</MenuItem>
                <MenuItem value="Policy B">Policy B</MenuItem>
              </Select>
            </FormControl>
          )}

          {/* Checkbox */}
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.dataAvailableInABC}
                onChange={handleChange('dataAvailableInABC')}
              />
            }
            label="Do you want the Data to Be Available in ABC file?"
          />

          {/* Retention Period */}
          <FormControl fullWidth>
            <InputLabel>Retention Period</InputLabel>
            <Select value={formData.retentionPeriod} onChange={handleChange('retentionPeriod')} label="Retention Period">
              <MenuItem value="1 Year">1 Year</MenuItem>
              <MenuItem value="3 Years">3 Years</MenuItem>
              <MenuItem value="5 Years">5 Years</MenuItem>
            </Select>
          </FormControl>

          {/* Archival Date */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Archival Date"
              value={formData.archivalDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>

          {/* Archival Frequency */}
          <FormControl fullWidth>
            <InputLabel>Archival Frequency</InputLabel>
            <Select value={formData.archivalFrequency} onChange={handleChange('archivalFrequency')} label="Archival Frequency">
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Quarterly">Quarterly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>
          </FormControl>

          {/* Archival Location */}
          <FormControl fullWidth>
            <InputLabel>Archival Location</InputLabel>
            <Select value={formData.archivalLocation} onChange={handleChange('archivalLocation')} label="Archival Location">
              <MenuItem value="Location A">Location A</MenuItem>
              <MenuItem value="Location B">Location B</MenuItem>
              <MenuItem value="Location C">Location C</MenuItem>
            </Select>
          </FormControl>

          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
            <Button variant="outlined" color="secondary" onClick={handleClear}>Clear</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ArchivalRequestForm;
