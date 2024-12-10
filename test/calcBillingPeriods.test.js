const moment = require('moment');

jest.mock('./nearestPrevValidDate', () => {
  const moment = require('moment');
  return jest.fn(date => {
    const providedDate = moment(date, 'YYYY-MM-DD');
    if (!providedDate.isValid()) {
      return providedDate.subtract(1, 'day').endOf('month').format('YYYY-MM-DD');
    }
    
    if (providedDate.date() === 1) {
      return providedDate.startOf('month').format('YYYY-MM-DD');
    }
    
    return providedDate.format('YYYY-MM-DD');
  });
});

jest.mock('./nearestNextValidDate', () => {
  const moment = require('moment');
  return jest.fn(date => {
    const providedDate = moment(date, 'YYYY-MM-DD');
    if (!providedDate.isValid()) {
      return providedDate.add(1, 'day').startOf('month').format('YYYY-MM-DD');
    }
    return providedDate.format('YYYY-MM-DD');
  });
});





const { calcBillingPeriods } = require('./calcBillingPeriods');

describe('calcBillingPeriods', () => {

  it('should return false if the periodYear is invalid (not a valid year)', () => {
    expect(calcBillingPeriods(15, 'abc')).toBe(false);
  });

  it('should return false if the periodYear is not a 4-digit number starting with 2', () => {
    expect(calcBillingPeriods(15, '1999')).toBe(false);
    expect(calcBillingPeriods(15, '20200')).toBe(false);
  });

  it('should return false if cutoffDate is less than 1 or greater than 31', () => {
    expect(calcBillingPeriods(0, '2022')).toBe(false);
    expect(calcBillingPeriods(32, '2022')).toBe(false);
  });

  it('should return an array of 12 billing periods for a valid year and cutoff date', () => {
    const result = calcBillingPeriods(15, '2022');
    expect(result).toHaveLength(12); 
  });

  it('should correctly calculate start_date and end_date for the first month', () => {
    const result = calcBillingPeriods(15, '2022');
    const firstMonth = result[0];
    expect(firstMonth.start_date).toBe('2021-12-15');
    expect(firstMonth.end_date).toBe('2022-01-15'); 
  });
  
  
  it('should format the month field correctly as YYYY-MM-01', () => {
    const result = calcBillingPeriods(15, '2022');
    expect(result[0].month).toBe('2022-01-01');
  });

  it('should correctly handle the transition from December to January', () => {
    const result = calcBillingPeriods(15, '2022');
    const lastMonth = result[11]; 

    expect(lastMonth.start_date).toBe('2022-11-15');
    expect(lastMonth.end_date).toBe('2022-12-15');
  });

  it('should return an array of length 12', () => {
    const result = calcBillingPeriods(15, '2022');
    expect(result).toHaveLength(12);
  });

});
