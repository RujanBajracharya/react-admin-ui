import { BarChartBox } from '../../components/barChartBox/BarChartBox';
import { BigChartBox } from '../../components/bigChartBox/BigChartBox';
import { ChartBox } from '../../components/chartbox/ChartBox';
import { PieChartBox } from '../../components/pieChartBox/PieChartBox';
import { TopBox } from '../../components/topbox/TopBox';
import { useGlobalContext } from '../../context';
import './home.scss';

const Home = () => {
  const { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue } = useGlobalContext();
  return (
    <div className='home'>
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><BigChartBox /></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home