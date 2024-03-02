import React, { useState, useEffect } from 'react';

const DateTimePicker = ({ setDateHour }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [error, setError] = useState('');

  useEffect(() => {
    setDateHour(generateResultObject());
  }, [selectedDate, startTime, endTime]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
    setError('');
  };

  const handleEndTimeChange = (event) => {
    const newEndTime = event.target.value;
    if (newEndTime >= startTime) {
      setEndTime(newEndTime);
      setError('');
    } else {
      setError('O horário final não pode ser anterior ao horário inicial.');
    }
  };

  const formatDateTime = (date, time) => {
    const formattedDate = date ? new Date(date).toISOString().split('T')[0] : '';
    return `${formattedDate} ${time}`;
  };

  const generateResultObject = () => {
    if (selectedDate && startTime && endTime && !error) {
      const formattedStartTime = formatDateTime(selectedDate, startTime);
      const formattedEndTime = formatDateTime(selectedDate, endTime);

      return {
        dataHoraInicio: formattedStartTime,
        dataHoraFim: formattedEndTime,
      };
    } else {
      return null;
    }
  };

  return (
    <div className='date-picker'>
      <div className='date-container'>
        <label className='date-label' htmlFor="selectedDate">Data</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <div className='time-container'>
        <div className='hour-initial-label'>
          <label htmlFor="selectedDate">Hora inicial:</label>
        </div>
        <div className='hour-container'>
          <div className='initial-hour'>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={handleStartTimeChange}
            />
          </div>
          <div className='hour-end-label'>
            <label htmlFor="endTime">final:</label>
          </div>
          <div className='end-hour'>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={handleEndTimeChange}
            />
          </div>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <style>
        {`
          .date-container {
            display: flex;
            width: 100%;
            margin-bottom: 0.2rem;
          }

          .time-container {
            display: flex;
            width: 100%;
          }

          .date-label, .hour-initial-label {
            width: 24%;
            align-self: center;
          }
          
          .hour-container {
            display: flex;
            width: 76%;
            margin-bottom: 0.2rem;
          }

          .initial-hour, .end-hour {
            display: flex;
            width: 60%;
          }

          .hour-end-label {
            display: flex;
            align-items: center;
            justify-content: end;
            padding-right: 1%;
            width: 30%;
          }

          input[type="date"] {
            /* Adicione estilos desejados aqui */
            border: 1px solid #ced4da;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            width: calc(76% - 1.5em);
          }

          input[type="time"] {
            /* Adicione estilos desejados aqui */
            border: 1px solid #ced4da;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 0.25rem;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default DateTimePicker;

