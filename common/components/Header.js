import React from 'react'
import { Link, IndexLink } from 'react-router'

export default ({
  sectionName
}) => {
  const className = `Header Header--${sectionName}`
  return (
    <div className={className}>
      <nav className='Header-nav'>
        <ul className='Header-navList'>
          <li className='Header-navListItem Header-navListItem--prime'>
            <h1 className='Header-title'>
              <IndexLink to='/'>
                <svg className='Header-logo' width='165px' height='24px' viewBox='0 0 165 24'>
                  <title>Design by Pascal</title>
                  <path d='M5.8658502,0.554666667 C11.0028947,0.554666667 14.7063765,4.25 14.7063765,8.9 C14.7063765,13.5493333 11.0028947,17.2453333 5.8658502,17.2453333 L0.251174089,17.2453333 L0.13159919,17.1266667 L0.13159919,0.674 L0.251174089,0.554666667 L5.8658502,0.554666667 L5.8658502,0.554666667 Z M2.5204251,14.8606667 L5.8658502,14.8606667 C9.44975709,14.8606667 11.9581579,12.238 11.9581579,8.9 C11.9581579,5.562 9.44975709,2.93866667 5.8658502,2.93866667 L2.5204251,2.93866667 L2.5204251,14.8606667 L2.5204251,14.8606667 Z' id='Fill-1'></path>
                  <path d='M27.1528543,16.0533333 C26.0773482,16.768 24.4046356,17.6026667 22.6130162,17.6026667 C19.1486842,17.6026667 16.4011336,14.8606667 16.4011336,11.5466667 C16.4011336,8.304 18.6703846,5.68133333 22.1353846,5.68133333 C25.121417,5.68133333 27.1528543,8.304 27.1528543,11.5226667 C27.1528543,11.642 27.1528543,11.8566667 27.0332794,12.1193333 L26.7941296,12.238 L18.8380567,12.238 C19.1486842,14.0266667 20.582247,15.338 22.6130162,15.338 C24.1661538,15.338 25.8381984,14.6226667 27.0332794,13.43 L27.1528543,13.5493333 L27.1528543,16.0533333 L27.1528543,16.0533333 Z M24.7633603,10.3306667 C24.6437854,9.01866667 23.4493725,7.946 22.1353846,7.946 C20.4626721,7.946 19.2682591,9.01866667 18.933583,10.3306667 L24.7633603,10.3306667 L24.7633603,10.3306667 Z' id='Fill-2'></path>
                  <path d='M36.7081579,9.138 C35.5130769,8.304 34.318664,7.946 33.123583,7.946 C32.0487449,7.946 31.4515385,8.42333333 31.4515385,9.01866667 C31.4515385,11.0453333 38.0221457,9.37666667 38.0221457,14.0266667 C38.0221457,16.0533333 36.2298583,17.6026667 33.3627328,17.6026667 C31.92917,17.6026667 30.1375506,17.2453333 29.0620445,16.53 L29.0620445,14.146 L29.1816194,14.0266667 C30.4956073,14.8606667 32.0487449,15.338 33.3627328,15.338 C35.0354453,15.338 35.5130769,14.8606667 35.5130769,14.0266667 C35.5130769,11.7613333 28.9424696,13.43 28.9424696,9.01866667 C28.9424696,7.11133333 30.6151822,5.68133333 33.123583,5.68133333 C34.5571457,5.68133333 35.8718016,6.03866667 36.8270648,6.63466667 L36.8270648,9.01866667 L36.7081579,9.138' id='Fill-3'></path>
                  <path d='M41.3922874,1.866 L42.8258502,3.296 L42.8258502,3.53533333 L41.3922874,4.96533333 L41.1531377,4.96533333 L39.7195749,3.53533333 L39.7195749,3.296 L41.1531377,1.866 L41.3922874,1.866 L41.3922874,1.866 Z M42.3475506,6.03866667 L42.4671255,6.15733333 L42.4671255,17.1266667 L42.3475506,17.2453333 L40.1972065,17.2453333 L40.0776316,17.1266667 L40.0776316,6.15733333 L40.1972065,6.03866667 L42.3475506,6.03866667 L42.3475506,6.03866667 Z' id='Fill-4'></path>
                  <path d='M54.9389879,6.15733333 L54.9389879,8.304 L54.820081,8.42333333 L53.5054251,8.42333333 C53.7205263,8.948 53.8641498,9.496 53.8641498,10.0926667 C53.8641498,12.596 52.0718623,14.5033333 49.3243117,14.5033333 C48.7271053,14.5033333 48.1298988,14.384 47.6522672,14.146 C47.5326923,14.2646667 47.4131174,14.384 47.4131174,14.6226667 C47.4131174,16.1726667 55.0585628,15.338 55.0585628,19.8686667 C55.0585628,21.99 52.9082186,23.5646667 49.5634615,23.5646667 C46.2187045,23.5646667 43.5900607,22.6106667 43.5900607,19.9873333 C43.5900607,18.676 44.6655668,17.6026667 46.0991296,16.6493333 C45.621498,16.2913333 45.1431984,15.8153333 45.1431984,14.9806667 C45.1431984,14.384 45.5012551,13.6686667 46.1465587,13.192 C45.2627733,12.3573333 44.7851417,11.332 44.7851417,10.0926667 C44.7851417,7.66 46.8159109,5.68133333 49.3243117,5.68133333 C49.9455668,5.68133333 50.5668219,5.824 51.1165992,6.03866667 L54.820081,6.03866667 L54.9389879,6.15733333 L54.9389879,6.15733333 Z M46.0991296,19.9873333 C46.0991296,20.9413333 47.1739676,21.418 49.5634615,21.418 C51.5942308,21.418 52.5501619,20.7033333 52.5501619,19.8686667 C52.5501619,18.3186667 49.2047368,17.842 48.0103239,17.484 C47.1739676,17.9606667 46.0991296,18.938 46.0991296,19.9873333 L46.0991296,19.9873333 Z M47.1739676,10.0926667 C47.1739676,11.332 48.0824696,12.3573333 49.3243117,12.3573333 C50.5668219,12.3573333 51.4746559,11.332 51.4746559,10.0926667 C51.4746559,8.852 50.5668219,7.82666667 49.3243117,7.82666667 C48.0824696,7.82666667 47.1739676,8.852 47.1739676,10.0926667 L47.1739676,10.0926667 Z' id='Fill-5'></path>
                  <path d='M59.1194332,6.03866667 L59.2390081,6.15733333 L59.2390081,6.51533333 C60.0753644,6.03866667 61.1502024,5.68133333 62.2257085,5.68133333 C65.8096154,5.68133333 67.6012348,7.70733333 67.6012348,10.9266667 L67.6012348,17.1266667 L67.4816599,17.2453333 L65.3319838,17.2453333 L65.2117409,17.1266667 L65.2117409,11.0453333 C65.2117409,9.138 64.2564777,7.946 62.2257085,7.946 C61.0312955,7.946 59.8362146,8.42333333 59.2390081,9.138 L59.2390081,17.1266667 L59.1194332,17.2453333 L56.9690891,17.2453333 L56.8495142,17.1266667 L56.8495142,6.15733333 L56.9690891,6.03866667 L59.1194332,6.03866667' id='Fill-6'></path>
                  <path d='M77.425749,3.058 C77.7363765,2.03266667 77.6882794,1.794 75.8966599,1.794 L76.1351417,0.984 C78.0703846,0.984 78.7637854,0.936 79.6475709,0.721333333 L79.9107692,0.721333333 L77.2346964,9.37666667 L77.2821255,9.42466667 C78.4765385,7.44533333 79.527996,6.65866667 80.8186032,6.65866667 C82.5146964,6.65866667 83.6376316,7.97 83.6376316,9.94933333 C83.6376316,11.8326667 82.6583198,13.716 80.7945547,15.576 C79.2895142,17.0786667 78.1659109,17.484 77.0910729,17.484 C75.3943117,17.484 74.0803239,16.4586667 74.0803239,14.7413333 C74.0803239,14.098 74.3916194,12.882 74.5586235,12.3333333 L77.425749,3.058 L77.425749,3.058 Z M80.0537247,8.35133333 C77.2106478,8.35133333 76.063664,14.098 76.063664,14.5746667 C76.063664,15.8386667 76.8525911,16.2673333 77.8319028,16.2673333 C79.8386235,16.2673333 81.8693927,12.6433333 81.8693927,10.5686667 C81.8693927,9.186 81.1766599,8.35133333 80.0537247,8.35133333 L80.0537247,8.35133333 Z' id='Fill-7'></path>
                  <path d='M87.6023077,9.54333333 C87.3631579,8.49466667 87.1961538,8.18466667 86.9095749,8.18466667 C86.3838462,8.18466667 85.8106883,8.99533333 85.4519636,10.2346667 L84.7111336,10.2346667 C85.2368623,8.13666667 86.5989474,6.65866667 87.8174089,6.65866667 C88.4867611,6.65866667 88.8688664,7.11133333 89.1313968,8.28 L90.9477328,16.2913333 C92.978502,13.716 93.9103846,11.7133333 93.9103846,9.97266667 C93.9103846,8.828 93.2410324,8.28 93.2410324,7.68333333 C93.2410324,7.088 93.6712348,6.65866667 94.2210121,6.65866667 C94.9852227,6.65866667 95.4869028,7.37333333 95.4869028,8.47066667 C95.4869028,11.094 92.8829757,15.5526667 89.8481781,18.5806667 C87.4834008,20.9413333 85.5241093,21.7993333 83.5641498,21.7993333 C82.5133603,21.7993333 81.8206275,21.346 81.8206275,20.6313333 C81.8206275,20.0593333 82.2267814,19.678 82.8239879,19.678 C83.779919,19.678 83.9950202,20.6073333 84.9983806,20.6073333 C85.9776923,20.6073333 87.7933603,19.4866667 89.51417,17.8653333 L87.6023077,9.54333333' id='Fill-8'></path>
                  <path d='M107.765709,0.554666667 C111.110466,0.554666667 113.49996,2.81933333 113.49996,5.68133333 C113.49996,8.54266667 111.110466,10.8073333 107.765709,10.8073333 L104.898583,10.8073333 L104.898583,17.1266667 L104.779008,17.2453333 L102.628664,17.2453333 L102.509089,17.1266667 L102.509089,0.674 L102.604615,0.554666667 L107.765709,0.554666667 L107.765709,0.554666667 Z M104.898583,8.42333333 L107.765709,8.42333333 C109.557996,8.42333333 110.752409,7.23066667 110.752409,5.68133333 C110.752409,4.13066667 109.557996,2.93866667 107.765709,2.93866667 L104.898583,2.93866667 L104.898583,8.42333333 L104.898583,8.42333333 Z' id='Fill-9'></path>
                  <path d='M115.529393,6.39666667 C116.246174,6.03866667 117.202105,5.68133333 118.516093,5.68133333 C121.144069,5.68133333 122.936356,7.23066667 122.936356,10.45 L122.936356,17.1266667 L122.816781,17.2453333 L120.666437,17.2453333 L120.546862,17.1266667 L120.546862,16.768 C119.710506,17.3646667 118.540142,17.6026667 117.799312,17.6026667 C115.768543,17.6026667 113.857348,16.6493333 113.857348,14.384 C113.857348,11.0453333 117.32168,10.2113333 120.546862,9.97266667 C120.546862,8.66133333 119.710506,7.946 118.396518,7.946 C117.08253,7.946 116.007692,8.304 114.573462,9.258 L114.454555,9.138 L115.529393,6.39666667 L115.529393,6.39666667 Z M120.546862,12 C118.038462,12.1193333 116.365749,12.9533333 116.365749,14.146 C116.365749,14.9806667 116.963623,15.338 118.038462,15.338 C118.874818,15.338 119.710506,15.0993333 120.546862,14.6226667 L120.546862,12 L120.546862,12 Z' id='Fill-10'></path>
                  <path d='M132.707429,9.138 C131.513016,8.304 130.318603,7.946 129.123522,7.946 C128.048684,7.946 127.451478,8.42333333 127.451478,9.01866667 C127.451478,11.0453333 134.022085,9.37666667 134.022085,14.0266667 C134.022085,16.0533333 132.229798,17.6026667 129.362672,17.6026667 C127.929109,17.6026667 126.136822,17.2453333 125.061984,16.53 L125.061984,14.146 L125.181559,14.0266667 C126.495547,14.8606667 128.048684,15.338 129.362672,15.338 C131.034717,15.338 131.513016,14.8606667 131.513016,14.0266667 C131.513016,11.7613333 124.942409,13.43 124.942409,9.01866667 C124.942409,7.11133333 126.615121,5.68133333 129.123522,5.68133333 C130.557085,5.68133333 131.871073,6.03866667 132.827004,6.63466667 L132.827004,9.01866667 L132.707429,9.138' id='Fill-11'></path>
                  <path d='M145.226721,9.496 C144.032308,8.42333333 142.837227,7.946 141.523239,7.946 C139.25332,7.946 137.819757,9.59133333 137.819757,11.642 C137.819757,13.6926667 139.25332,15.338 141.523239,15.338 C142.837227,15.338 144.032308,14.8606667 145.226721,13.788 L145.346296,13.9073333 L145.346296,16.4106667 C144.390364,17.1266667 143.076377,17.6026667 141.523239,17.6026667 C137.819757,17.6026667 135.310688,14.932 135.310688,11.642 C135.310688,8.35133333 137.819757,5.68133333 141.523239,5.68133333 C143.076377,5.68133333 144.390364,6.15733333 145.346296,6.87333333 L145.346296,9.37666667 L145.226721,9.496' id='Fill-12'></path>
                  <path d='M148.570142,6.39666667 C149.286923,6.03866667 150.242186,5.68133333 151.556842,5.68133333 C154.184818,5.68133333 155.976437,7.23066667 155.976437,10.45 L155.976437,17.1266667 L155.856862,17.2453333 L153.706518,17.2453333 L153.587611,17.1266667 L153.587611,16.768 C152.751255,17.3646667 151.580891,17.6026667 150.839393,17.6026667 C148.808623,17.6026667 146.897429,16.6493333 146.897429,14.384 C146.897429,11.0453333 150.362429,10.2113333 153.587611,9.97266667 C153.587611,8.66133333 152.751255,7.946 151.437267,7.946 C150.122611,7.946 149.047773,8.304 147.614211,9.258 L147.495304,9.138 L148.570142,6.39666667 L148.570142,6.39666667 Z M153.587611,12 C151.078543,12.1193333 149.406498,12.9533333 149.406498,14.146 C149.406498,14.9806667 150.003704,15.338 151.078543,15.338 C151.914899,15.338 152.751255,15.0993333 153.587611,14.6226667 L153.587611,12 L153.587611,12 Z' id='Fill-13'></path>
                  <path d='M160.563704,0.554666667 L160.683279,0.674 L160.683279,13.192 C160.683279,14.7413333 161.280486,15.338 162.236417,15.338 C162.953198,15.338 163.66998,15.0993333 164.386761,14.384 L164.505668,14.5033333 L164.505668,16.888 C163.90913,17.2453333 163.072773,17.6026667 162.236417,17.6026667 C159.727348,17.6026667 158.294453,16.0533333 158.294453,13.3113333 L158.294453,0.674 L158.41336,0.554666667 L160.563704,0.554666667' id='Fill-14'></path>
                </svg>
              </IndexLink>
            </h1>
          </li>
          <li className='Header-navListItem Header-navListItem--beginning'>
            <Link to='/projects' className='Header-navLink' activeClassName='is-active'>Projects</Link>
          </li>
          <li className='Header-navListItem Header-navListItem--beginning'>
            <Link to='/about' className='Header-navLink' activeClassName='is-active'>About</Link>
          </li>
          <li className='Header-navListItem Header-navListItem--end'>
            <Link to='/shop' className='Header-navLink' activeClassName='is-active'>Shop</Link>
          </li>
          <li className='Header-navListItem Header-navListItem--end'>
            <Link to='/hindsight' className='Header-navLink' activeClassName='is-active'>Hindsight</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
