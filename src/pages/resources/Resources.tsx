import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import SearchBar from '../../components/searchBar'
import '../../global.css'
import styles from './Resources.module.css'
import ResourcesSearchItem from '../../components/resourcesSearchItem'
import { useEffect, useRef, useState } from 'react'
import { resources } from '../../data/resources'
import { useSearchParams } from "react-router-dom";
import { Filter } from 'lucide-react'

import { filterData, type FilterData } from "../../config/filters.tsx";
import type { Filters } from '../../types/Resources.ts'



function Resources() {
  const navRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const searchHeaderRef = useRef<HTMLDivElement>(null); // ← new ref for search header
  const [stacked, setStacked] = useState(false);

  const [filtersOpen, setFiltersOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  useEffect(() => {
    if (!navRef.current || !sentinelRef.current || !searchHeaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStacked(!entry.isIntersecting);
      },
      {
        rootMargin: `-${navRef.current.offsetHeight}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    } else {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  const [activeFilters, setActiveFilters] = useState<Filters[]>([]);

  const toggleFilter = (key: Filters) => {
    setActiveFilters(prev =>
      prev.includes(key)
        ? prev.filter(f => f !== key)
        : [...prev, key]
    );
  };

  const filteredResources = resources.filter(resource => {
    const matchesText =
      resource.title.toLowerCase().includes(normalizedQuery) ||
      resource.description.toLowerCase().includes(normalizedQuery);

    const matchesFilters =
      activeFilters.length === 0 ||
      activeFilters.every(filter =>
        resource.topics.includes(filter)
      );

    return matchesText && matchesFilters;
  });

  
  return (
    <>
      <Navbar ref={navRef} stacked={stacked} />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <div 
            className={styles.heroBG}
          />

          <div className={styles.content}>
            <h1 className={styles.title}>Community Resources</h1>
            <h2 className={`interSubtitle ${styles.subtitle}`}>Search for local community resources and organizations.</h2>
          </div>
        </section>

        <div
          ref={sentinelRef}
          style={{ height: 1 }}
          aria-hidden
        />

        <section className={styles.searchHeaderBox}>
          <div
            ref={searchHeaderRef}
            className={`${styles.searchHeader} ${
              stacked ? styles.stacked : ""
            }`}
          >
          <div className={styles.searchBox}>
            <SearchBar  initialQuery={searchQuery} 
            onSearch={(query) => {
              setSearchQuery(query);
            }}
            onChange={(query) => {
              setSearchQuery(query);
            }}/>
          </div>

          <div style={{position: "relative"}}>
            <button className={styles.filterButton} onClick={() => {setFiltersOpen(!filtersOpen)}}>
              <Filter size={30} strokeWidth={2} />
            </button>
            <div className={`${styles.popover} ${filtersOpen ? styles.open : styles.closed}`}>
              {(Object.entries(filterData) as [Filters, FilterData][]).map(
                ([key, value]) => (
                  <label className={styles.tagSelector} key={key}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={activeFilters.includes(key)}
                      onChange={() => toggleFilter(key)}
                    />

                    <div className={styles.cardTopic}>
                      {value.icon}
                      <div className={styles.hitbox} />
                      <h4 className={styles.tagText}>{value.label}</h4>
                    </div>
                  </label>
                )
              )}
            </div>
          </div>
          
        </div>

        </section>

        <section className={styles.resourceList}>
          <div className={styles.itemGrid}>

            {filteredResources.length === 0 && (normalizedQuery || activeFilters.length > 0) && (
              <h2 className="interHeader">
                No resources found. Try changing the search prompt!
              </h2>
            )}


            {filteredResources.map(resource => (
              <ResourcesSearchItem key={resource.id} {...resource} />
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Resources;
