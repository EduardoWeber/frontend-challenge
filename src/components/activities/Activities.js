import React, { useState, useEffect } from 'react';
import styles from './Activities.module.css';
import { MdSearch } from 'react-icons/md';
import Card from '../card';
import Indicator from '../../components/indicator';
import TimelineCategory from '../../components/timelineCategory';

function Activities(props) {
  const { data } = props;
  const [filtered, setFiltered] = useState(data);
  const [activities, setActivities] = useState('all');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    setFiltered(
      data.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.contact.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }, [data, searchText]);

  function isCategoryEnabled(category) {
    return activities === 'all' || activities === category;
  }

  function getActivitiesByCategory(category) {
    return filtered.filter((item) => item.category === category);
  }

  function getAmountActivitiesByCategory(category) {
    return filtered.filter((item) => item.category === category).length;
  }

  function getTimelineCategory(category) {
    if (
      isCategoryEnabled(category) &&
      getAmountActivitiesByCategory(category)
    ) {
      return (
        <TimelineCategory
          name="Concluídas"
          color="green"
          data={getActivitiesByCategory(category)}
        />
      );
    }
  }

  return (
    <Card title="Atividades">
      <div className={styles.searchBar}>
        <MdSearch size="1.25em" className={styles.icon} color="#424242" />
        <div className={styles.inputField}>
          <input
            type="text"
            name="name"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Pesquisar..."
            autoComplete="off"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <Indicator
            value={filtered.length}
            title="Total"
            color="grey"
            isSelectable={true}
            isSelected={activities === 'all'}
            onClick={() => setActivities('all')}
          />
        </div>
        <div className={styles.gridItem}>
          <Indicator
            value={getAmountActivitiesByCategory('late')}
            title="Em atraso"
            color="red"
            isSelectable={true}
            isSelected={activities === 'late'}
            onClick={() => setActivities('late')}
          />
        </div>
        <div className={styles.gridItem}>
          <Indicator
            value={getAmountActivitiesByCategory('underway')}
            title="Em andamento"
            color="blue"
            isSelectable={true}
            isSelected={activities === 'underway'}
            onClick={() => setActivities('underway')}
          />
        </div>
        <div className={styles.gridItem}>
          <Indicator
            value={getAmountActivitiesByCategory('expected')}
            title="Previstas"
            color="orange"
            isSelectable={true}
            isSelected={activities === 'expected'}
            onClick={() => setActivities('expected')}
          />
        </div>
        <div className={styles.gridItem}>
          <Indicator
            value={getAmountActivitiesByCategory('finished')}
            title="Concluídas"
            color="green"
            isSelectable={true}
            isSelected={activities === 'finished'}
            onClick={() => setActivities('finished')}
          />
        </div>
      </div>
      <div className={styles.timeline}>
        {getTimelineCategory('late')}
        {getTimelineCategory('underway')}
        {getTimelineCategory('expected')}
        {getTimelineCategory('finished')}
      </div>
    </Card>
  );
}

export default Activities;
