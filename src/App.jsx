import './App.css';
import { useState } from 'react';
import PageSelectorItem from './components/PageSelectorItem';
import { PAGES_DATA } from './constants/pagesData';

function App() {
  const [selectedPages, setSelectedPages] = useState([]);

  const handleAllPagesToggle = () => {
    if (selectedPages.length === PAGES_DATA.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(PAGES_DATA.map(page => page.id));
    }
  };

  const handlePageToggle = (id) => {
    if (selectedPages.includes(id)) {
      setSelectedPages(selectedPages.filter(pageId => pageId !== id));
    } else {
      setSelectedPages([...selectedPages, id]);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' w-92.5 h-81.5 rounded-md border border-[#EEEEEE] shadow-[0px_8px_15px_0px_rgba(20,20,20,0.12),0px_0px_4px_0px_rgba(20,20,20,0.10)]'>
        <div className='py-2'>
          <PageSelectorItem
            title="All pages"
            checked={selectedPages.length === PAGES_DATA.length && PAGES_DATA.length > 0}
            onClick={handleAllPagesToggle}
          />
        </div>
        <div className='border-[#CDCDCD] w-85 border-b mx-auto'></div>
        <div className='py-2 overflow-y-auto h-45 scroll-y-auto no-scrollbar'>
          {PAGES_DATA.map((page) => (
            <PageSelectorItem
              key={page.id}
              title={page.title}
              checked={selectedPages.includes(page.id)}
              onClick={() => handlePageToggle(page.id)}
            />
          ))}
        </div>
        <div className='border-[#CDCDCD] w-85 border-b mx-auto'></div>
        <button className='cursor-pointer rounded-sm bg-[#FFCE22] text-[14px] h-10 w-85 mx-auto block mt-6 hover:bg-[#FFD84D]'>Done</button>
      </div>
    </div>
  )
}

export default App
