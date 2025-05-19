import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import an icon for the link button

const PublishedPapersSection = () => {
  const papers = [
    {
      title: 'In pursuit of degenerative brain disease diagnosis: Dementia biomarkers detected by DNA aptamer-attached portable graphene biosensor',
      authors: 'Prachi Heda (Contributing Author)',
      journal: 'Proceedings of the National Academy of Sciences (PNAS)',
      year: '2024', 
      link: 'https://doi.org/10.1073/pnas.2311565120',
      description: 'Contributing author, UCSD Bioengineering',
    },
    {
      title: 'Anticancer Sulforaphane Derivatives Using QSAR, Docking, and ADME Studies',
      authors: 'Prachi Heda (First Author)',
      journal: 'Journal of Student Research',
      year: '2021',
      link: 'https://doi.org/10.47611/jsrhs.v10i4.2247',
      description: 'First Author of paper published in Journal of Student Research.',
    },
    {
      title: 'Identifying Key Biomarkers in Prostate Cancer Using Bioinformatic Analysis',
      authors: 'Prachi Heda',
      journal: 'Symposium Presentation',
      year: '2021',
      description: 'Used GEO2R, David Gene Ontology, STRING, Cytoscape, GEPIA, and ProgeneV2 to identify 4 key biomarkers. Presented in a Symposium of 50+ highlighting the research process and outcome of analyzing 2000+ gene signatures.',
      link: 'https://docs.google.com/presentation/d/17EKbtXASIT6R-p50e25Xdws0x7Q5o4QRGazMBKvkhp4/edit?usp=sharing',
    },
    {
      title: 'Potential of Cephalotaxine & Derivatives as an Alternative for Therapies',
      authors: 'Prachi Heda',
      journal: 'Journal of Student Research',
      year: '2021',
      link: 'https://doi.org/10.47611/jsrhs.v10i2.1483',
      description: 'Review article published in Journal of Student Research with over 300 downloads.',
    },
    {
      title: 'Synthesis and SAR of 2-Substituted Benzimidazole KRAS Inhibitors',
      authors: 'Prachi Heda (Author)',
      journal: 'ASDRP Communications Vol. II',
      year: '2020',
      description: 'Identified 2-Substituted KRAS inhibitors through docking software - AutodockVina, Chimera, Avogadro, Orca, Pymol, etc.',
      link: 'https://drive.google.com/file/d/12HSUbmGLPVEIkDoVodgoOEuGYz4rOk4U/view',
    }
  ];

  if (papers.length === 0) {
    return null;
  }

  return (
    <div className="text-center" id="research-papers"> {/* Ensure ID is here for navigation */}
      <h2 className="text-3xl font-bold text-white mb-10 pb-2 border-b border-white/30 inline-block">
        Research Papers
      </h2>
      <div className="space-y-8 max-w-3xl mx-auto text-left">
        {papers.map((paper, index) => (
          <div key={index} className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors flex flex-col">
            <h3 className="text-xl font-semibold text-purple-300 mb-1">
              {paper.title}
            </h3>
            {/* <p className="text-sm text-gray-300 dark:text-gray-400 italic">{paper.authors}</p> */}
            <p className="text-md text-gray-200 dark:text-gray-300 mt-1">{paper.journal} ({paper.year})</p>
            {paper.description && <p className="text-sm text-gray-300 dark:text-gray-400 mt-2 flex-grow">{paper.description}</p>}
            {paper.link && (
              <div className="mt-4 self-start">
                <a 
                  href={paper.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/20 hover:bg-purple-500/40 rounded-md transition-colors"
                >
                  <FaExternalLinkAlt />
                  View Publication
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishedPapersSection; 