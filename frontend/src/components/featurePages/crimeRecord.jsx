import React from 'react';
import Ticker from 'react-ticker';
import Crimechart from '../chart/Crimechart';

const CrimeRecord = () => {
  return (
    <div>
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded overflow-hidden">
        <Ticker speed={5} mode="chain" move={true}>
          {({ index }) => (
            <div style={{ whiteSpace: 'nowrap' }}>
              <b>Important Notice Regarding Crime Data:</b> Please be advised that the crime data displayed on this website is intended for general informational purposes only. While we strive to provide the most accurate information possible based on available sources, there may be inaccuracies or delays in data reporting and compilation. Factors such as reporting variations, data processing timelines, and potential discrepancies in official records can affect the accuracy of the data presented here. This data should not be used for official purposes. For official statistics, please refer to NCRB and local authorities.
            </div>
          )}
        </Ticker>
      </div>
      <div className="mt-4">
        <Crimechart />
      </div>
    </div>
  );
};

export default CrimeRecord;