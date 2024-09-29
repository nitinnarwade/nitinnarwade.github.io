$(document).ready(function () {
     $('[data-toggle="tooltip"]').tooltip();
     $("html, body").animate({
          scrollTop: 0
     }, 1500);
     if (window.history.replaceState) {
          window.history.replaceState(null, null, window.location.href);
     }
});

bAndpData = {
     'curie': {
          'name': "Partner 1 / Coordinator: Institut Curie (FR)",
          'link': "https://curie.fr/",
          'logo': "img/partners-logo/LogosCurie.png",
          'address': "26 rue d'Ulm, 75248 Paris cedex 05 - France",
          'summary': "A recognized public interest foundation since 1921, Institut Curie has worked to fulfil its three missions since its founding by Marie Curie, namely research, care and the preservation and transfer of knowledge. This multi-disciplinary approach, part of the bylaws of the foundation, is the DNA of Institut Curie.<br/><br/><b>Signaling and Neural Crest Development:</b> Prof. Anne-Helene Monsoro-Burq, who has an independent group at Institut Curie, (division of Molecular Signaling in Neural Crest Development) is a principle contributing researcher from Partner 1.<br/><br/>The neural crest is a key embryonic cell population undergoing EMT. Despite a wide interest for the early steps of development of these cells and the identification of many secreted factors and genes involved in neural crest induction, our knowledge of how these signals are integrated and how these genes are organised into an epistatic cascade is poorly documented. Our aim is to provide a comprehensive understanding of the genetic network controlling early neural crest formation during development, from its induction to EMT. We focus on the genes (transcription factors mainly) and growth factors that control Snail1 and Snail2 induction, or the genes that cooperate with Snail 1/2 to complete the EMT process. By taking advantage of the multiple ways of manipulating embryogenesis in amphibian and avian embryos, we have provided the first epistatic and functional cascade of regulations upstream of Snail1/2 in neural crest induction. Our findings in amphibian embryos have provided a novel and useful framework, now confirmed in other vertebrate species. These findings will provide critical novel clues to understand neural crest formation and control of EMT on a fundamental point of view and will also identify new molecular candidates for a precocious diagnosis of tumour progression and potential therapeutic targets.<br/><br/>In the frames of NEUcrest project, Prof. Monsoro’s lab will be hosting the young researchers ESR1 and ESR2.<br/><br/><a href='https://science.institut-curie.org/research/biology-chemistry-of-radiations-cell-signaling-and-cancer-axis/umr-3347-normal-and-pathological-signaling/team-monsoro-burq/' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
     },
     'kcl': {
          'name': "Partner 2: King’s College of London (United Kingdom)",
          'link': "https://www.kcl.ac.uk/",
          'logo': "img/partners-logo/kcl.png",
          'address': "King's College London, Strand, London, WC2R 2LS, United Kingdom",
          'summary': "A recognized public interest foundation since 1921, Institut Curie has worked to fulfil its three missions since its founding by Marie Curie, namely research, care and the preservation and transfer of knowledge. This multi-disciplinary approach, part of the bylaws of the foundation, is the DNA of Institut Curie.<br/><br/><b>Signaling and Neural Crest Development:</b> Prof. Karen Liu, who has had an independent group at KCL (Centre for Craniofacial and Regenerative Biology), is a principle contributing researcher from Partner 2.<br/><br/>Professor Liu’s lab focuses on the development of the neural crest cell population. Undifferentiated neural crest cells undergo epithelial-mesenchymal transformations (EMT), migrate from the neural tube, and populate distant destinations. These cells display incredible plasticity, giving rise to diverse tissues ranging from bone and cartilage to adipocytes and neurons. Persistence of this multipotent population into adults may reflect the important contributions of the neural crest lineage to development, homeostasis and repair of vertebrate organs.<br/><br/>Their research makes use of multiple animal models, including frog, mouse, chick and humans. They also bring together biology and chemistry, designing new tools to study development and differentiation over time. Current projects include work on mammalian neural crest stem cells, migratory neural crest, contributions of the neural crest to head structures, and human craniofacial anomalies.<br/><br/>Prof. Liu’s research group will be hosting the young researcher ESR4.<br/><br/><a href='https://www.kcl.ac.uk/people/karen-liu' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
     },
     'uea': {
		'name': "Partner 3: University of East Anglia, United Kingdom",
          'link': "http://www.uea.ac.uk/",
          'logo': "img/partners-logo/uea-logo-university-of-east-anglia.png",
          'address': "Norwich Research Park, Norwich NR4 7TJ, United Kingdom",
          'summary': "The University of East Anglia (UEA) is a public research university in Norwich, England. Established in 1963, the university has four faculties and 26 schools of study. The campus is located in 320 acres of rolling parkland just two miles from the centre of Norwich, the cathedral city, and England’s first UNESCO City of Literature. This uniquely-placed University is also a leading member of Norwich Research Park, one of Europe’s biggest concentrations of researchers in the fields of environment, health and plant science.<br/><br/>UEA is ranked in the UK Top 25 (The Times/Sunday Times 2020 and Complete University Guide 2020), and the World Top 200 Universities (The Times Higher Education World University Rankings 2020). It is an internationally renowned university based in a campus that provides top quality academic, social and cultural facilities to over 17,000 students across a diverse range of Undergraduate and Postgraduate degree courses.<br/><br/><b>Gene regulatory networks during early embryonic development and in cancer:</b> Prof. Grant N Wheeler is a principle contributing researcher from University of East Anglia, School of Biological Sciences. The Wheeler lab is a dynamic group using the amphibian Xenopus as a model organism to study aspects of cell and developmental biology in a whole animal situation. The group uses modern methods of embryology and molecular biology in the lab. Current research looks at the molecular events that govern the origin of the Neural Crest and its derivatives in the early embryo.<br/><br/>Prof. Wheeler’s lab will be hosting the young researchers ESR5 and ESR6.<br/><br/><a href='https://www.researchgate.net/profile/Grant_Wheeler' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'NUI': {
		'name': "Partner 4: National University of Ireland Galway (Ireland)",
          'link': "http://www.nuigalway.ie/",
          'logo': "img/partners-logo/NUI.jpg",
          'address': "University Rd, Galway, Ireland",
          'summary': "The National University of Ireland Galway (NUIG) takes its beginning in 1845, the year Queen’s College Galway was founded. Following construction of the iconic Quadrangle building, the University opened its doors four years later to the first cohort of just 68 students.<br/><br/>NUI Galway has grown massively in size and reputation over the past 175 years, with a student population today of over 18,000. According to QS World University Rankings, we are ranked 259 in the world and have been increasing our global reach and reputation over the past decade.<br/><br/><b>Embryonic and larval stages of clawed toads (Xenopus laevis):</b> Dr. Gerhard Schlosser is a principle contributing researcher from NUI Galway, Regenerative Medicine Institute (REMEDI).<br/><br/>His research team is focused on the development and evolution of the vertebrate nervous system and sense organs. \"One major focus of our research are cranial placodes, the precursors of most ganglia and sense organs in the vertebrate head. We mainly use the clawed toad Xenopus laevis as a model organism to study their development. In addition, we try to elucidate evolutionary origins and modifications of cranial sense organs by comparison with other chordates. In previous studies we cloned the Xenopus Eya1 gene and pro­vided the first de­tailed descrip­tion and fatemap of pla­c­ode development in Xenopus. We also did the first comprehensive functional anal­y­ses of upstream regulators of Eya1 and Six1 in Xenopus placodes and analysed the role of Eya1 and Six1 in regulating neuro­gene­sis in placodes. In recent studies, we used RNA-Seq of the placodal transcriptome after injection of hormone-inducible constructs of Eya1 and Six1 to identify putative Eya1 and Six1 target genes. We currently study the function of these target genes and of Eya1 protein interaction partners in placode development. We also pursue broader questions of sensory development and evolution as well as more general theoretical problems concerning the evolution of developmental processes.\"<br/><br/>In the frames of NEUcrest project, Dr. Schlosser will be hosting the young researchers ESR7 and ESR8 who will be conducting experiments on embryonic and larval stages of Xenopus laevis.<br/><br/><a href='http://www.nuigalway.ie/remedi/research/stem-cell-biology' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'UMH': {
		'name': "Partner 5: Universidad Miguel Hernandez de elche, Spain",
          'link': "https://www.umh.es/",
          'logo': "img/partners-logo/UMH.jpg",
          'address': "Avinguda de la Universitat d'Elx, s/n, 03202 Elche, Alicante, Spain",
          'summary': "The UMH holds the Neurosciences Institute (IN), a joint research Institute (JRI) together with the Spanish National Research Council (CSIC). It is an internationally recognized centre for Neuroscience and Cancer research, holding the “Severo Ochoa Excellence Award”, a very prestigious award only given to 25 Institutions nationwide. M Angela NIETO research group has been studying cell movements and plasticity more than 20 years. In particular, they have studied the epithelial to mesenchymal transition (EMT) during embryonic development since their description of the Snail family of transcription factors and their involvement in the development and migration of the neural crest in 1994. Their main contribution has been the impact that the reactivation of this developmental program has in adult disease, as they made the connection with tumour progression. In the last ten years, they have continued describing new developmental EMTs and extended the concept of its reactivation in pathologies related to bone development and homeostasis and also organ degeneration (fibrosis), opening new avenues for antimetastatic and antifibrotic therapies.<br/><br/><b>Neural crest, EMT and cancer:</b> Prof. Angela NIETO research group has been studying cell movements and plasticity more than 20 years. In particular, they have studied the epithelial to mesenchymal transition (EMT) during embryonic development since their description of the Snail family of transcription factors and their involvement in the development and migration of the neural crest in 1994. Their main contribution has been the impact that the reactivation of this developmental program has in adult disease, as they made the connection with tumour progression. In the last ten years, they have continued describing new developmental EMTs and extended the concept of its reactivation in pathologies related to bone development and homeostasis and also organ degeneration (fibrosis), opening new avenues for antimetastatic and antifibrotic therapies.<br/><br/>Prof. Nieto’s lab will be hosting the young researchers ESR9 and ESR10.<br/><br/><a href='http://in.umh-csic.es/grupos-detalle.aspx?grupo=43' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'Erasmus_MC': {
		'name': "Partner 6: Erasmus Universitair Medisch, Netherlands",
          'link': "https://www.erasmusmc.nl/en",
          'logo': "img/partners-logo/Erasmus_MC-logo.png",
          'address': "Erasmus MC, Dr Molewaterplein 40, 3015 GD Rotterdam, The Netherlands",
          'summary': "Erasmus Medical Center (EMC) is a single organisation with a single identity. Erasmus MC encompasses a full spectrum of clinical services, including those provided by two specialist units operating under the Erasmus MC umbrella: Erasmus MC Sophia Children’s Hospital and Erasmus MC Cancer Institute. Both have unique reputations of their own in the world of university hospitals.<br/><br/><b>Craniofacial research:</b> The Craniofacial Center of the Erasmus MC, University Medical Center (EMC) in Rotterdam, the Netherlands, is the largest Craniofacial Center of the Netherlands. It was founded in 1972. During the forty years of its existence, a patient cohort of over 1700 patients with congenital craniofacial malformations has been collected. Nowadays, the Craniofacial Center is one of the two centres in the Netherlands that is allowed to treat patients with these severe craniofacial malformations. To improve research studies, close national and international collaborations have been accomplished in the last years. And recently, the European Reference Network CRANIO has been launched where EMC plays a key role Prof. Irene Mathijssen (CRANIO network coordinator) and Dr J.W. (Han) van Neck are the EMC principal contributing investigators to the NEUcrest project.<br/><br/>EMC Rotterdam will be hosting the young researcher ESR11, who will be working on the establishment of human iPSCs from syndromic neurocristopathy patients with skeletal dysplasia.<br/><br/><a href='https://www.erasmusmc.nl/en/sophia/research/researchers/mathijssen-irene' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'MUW': {
		'name': "Partner 7: Medizinische Universität Wien, Austria",
          'link': "https://www.meduniwien.ac.at/web/en/",
          'logo': "img/partners-logo/MUW.png",
          'address': "Spitalgasse 23, 1090 Wien, Austria",
          'summary': "The Medical University of Vienna (briefly: MedUni Vienna) is one of the most traditional medical training and research facilities in Europe. It is today the largest medical training institute in the German-speaking area with about 8,000 students. With its 26 university hospitals, two clinical institutes, 12 theoretical medicine centres and numerous highly specialised laboratories, it is included among the most important cutting-edge research institutes of Europe in the area of biomedicine. Its own laboratory building with highly specialised \"Core Facilities” was inaugurated in June 2010 with the “Anna Spiegel Research Building\".<br/><br/><b>Single cell data in neural crest:</b> We do have our own scientific philosophy and we respect theoretical biology in addition to classical experimental approach. We look at a range of live systems from a mechanistic point of view, trying to decompose and reverse engineer different parts or aspects of life. Tracing the incremental advancements in development of multicellular organisms from single cell allows understanding the complexity of the entire organism or organ system in a final phase. That is why our main strength is developmental biology. The knowledge gained from developmental biology research is widely applied in regenerative medicine, and, thus, we hope to improve human health via discovering new fundamental ideas about how regeneration works.<br/><br/>Prof. Adameyko’s lab will be hosting the young researcher ESR12, who will be focusing on prediction of new treatments for rare paediatric paraganglioma and pheochromocytoma based on single cell transcriptomics.<br/><br/><a href='http://adameykolab.eu/#people' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'TAU': {
		'name': "Partner 8: Tel Aviv University, Israel",
          'link': "https://english.tau.ac.il/",
          'logo': "img/partners-logo/TAU.png",
          'address': "Tel Aviv-Yafo, Israel",
          'summary': "Tel Aviv University (TAU) - Israel’s largest and most comprehensive institution of higher learning – is home to over 30,000 students studying in nine faculties and over 125 schools and departments across the spectrum of sciences, humanities and the arts.<br/><br/><b>Neural crest and Melanoma cancer:</b> Our scientific interests involve the role of microRNAs in development, differentiation and malignant transformation. Focusing our studies on melanocytes will provide the foundation for developing novel approaches in the prevention, diagnosis, and treatment of skin cancer in general and melanoma in particular. In addition, we are intrigued by the possibility of using these systems as a model for exploring basic microRNA biogenesis beyond the cell specific context.<br/><br/>Prof. Carmit Levy at the Department of Human Molecular Genetics & Biochemistry, Sackler Faculty of Medicine, a recent winner of the Young Investigator Award of the Society for Melanoma Research , is a principle contributing researcher from Partner 8.Prof. Levy’s lab will be hosting the young researcher ESR13, who will be focusing on the role of adipocytes in tissue environment and melanocyte differentiation.<br/><br/><a href='https://english.m.tau.ac.il/profile/carmitlevy' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'Stemcell': {
		'name': "Partner 9: Stemcell Technologies Uk Ltd, United Kingdom",
          'link': "https://www.stemcell.com/",
          'logo': "img/partners-logo/Stemcell-tech-logo.png",
          'address': "Stemcell Technologies Uk Ltd, United Kingdom",
          'summary': "STEMCELL specializes in developing cell culture media, cell separation systems, instruments and other reagents for use in life sciences research across the basic to translational research continuum. Our products are designed and developed by highly trained, world class scientists to streamline research protocols, reduce experimental variability, and increase the accuracy of results. We develop our product lines to support entire experimental workflows, from cell isolation through characterization, expansion, differentiation, maintenance and storage, and are always looking for ways to further support our customers through training, knowledge and new products. STEMCELL’s Research and Development team often collaborates with academic partners to develop, produce and distribute products specific to a given research field.<br/><br/><b>Neural crest and neuroblastoma:</b> Dr. Wing Chang and Dr. Erin Knock are the principle contributing researchers from Partner 9. Stemcell Technologies UK will be hosting the young researcher ESR3, who will be focusing on the neural crest and neuroblastoma modeling.<br/><br/><a href='https://www.stemcell.com/cambridge-uk' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'Azelead': {
		'name': "Partner 10: Azelead, France",
          'link': "http://www.azelead.com/",
          'logo': "img/partners-logo/Azelead.png",
          'address': "377 Rue du Professeur Blayac, 34080 Montpellier, France",
          'summary': "AZELEAD is a French biotechnology company, established in France since 2014. The principal activities of the company are dedicated to medicine and toxicology applications. The research is focused on cancerology with the screening of anti-metastatic compounds and the analysis and diagnosis of metastatic process. In parallel, toxicity tests have been developed to detect the earliest toxic effects of candidate molecules.<br/><br/><b>Neural crest and Metastasis process:</b> Dr. Laura Fontenille and Karima Kissa are the principle contributing researchers from Partner 10. Azelead will be hosting the young researcher ESR15, who will be focusing on neural crest implication in tumour innervation. The role of Azelead team is to explore the impact of sympathetic innervation on melanoma initiation and migration using high content imaging in transparent zebrafish using Azelead’s cutting-edge technology in 4D and high resolution imaging.<br/><br/><a href='http://www.azelead.com/fr/retd/' target='_blank'>Click here for details of Azelead R&D page <i class='fa fa-angle-double-right'></i></a>"
	},
     'Imagine': {
		'name': "Partner 11: Institut Imagine, France",
          'link': "https://www.institutimagine.org/en",
          'logo': "img/partners-logo/Imagine.png",
          'address': "24 Boulevard du Montparnasse, 75015 Paris, France",
          'summary': "First European center of research, care and education on genetic diseases, the Imagine Institute aims to understand them and cure them. The Institute brings together 1000 of the best doctors, researchers and healthcare personnel in a creative architecture of synergies. Today Imagine is focused on its ambition to change the lives of families affected by genetic diseases.<br/><br/><b>Neural crest and Waardenburg syndrome:</b> Research projects developed in our group mainly focus on the understanding of molecular and cellular bases of Waardenburg syndrome (WS), a rare genetic disorder due to abnormal development of the Neural crest. We pay particular attention to the SOX10 transcription factor, the endothelin”/EDNRB signaling pathway functions, their interactomes and to post-transcriptional RNA modification.<br/><br/>In 1998, we identified the first mutations of SOX10 in patients presenting with Waardenburg syndrome type 4 (WS4) which is defined by the association of intestinal aganglionosis characteristic of Hirschsprung disease (HSCR, absence of enteric ganglia along the distal gastrointestinal tract which results in functional intestinal obstruction) with the pigmentation defects and deafness characteristic of WS. Since then, we have been at the heart of genetic studies highlighting involvement of this gene in endophenotypes or related disorders (WS2, PCWH, isolated HSCR and Kallmann syndrome). We developed in vitro tools to test functional consequences of mutations identified in WS genes or their regulatory sequences. Since 2003, we also use mouse models to study genetic interactions taking place between Sox10, Edn3/Ednrb and other genes known to play key roles during enteric nervous system (ENS) development and have developed cellular models allowing the study of the role of ENS factors/signaling pathways in proliferation, migration, apoptosis and/or differentiation of enteric progenitors in a step by step procedure.<br/><br/>Dr Nadège Bondurand and Dr. Veronique Pingault are principle contributing researchers from Partner 11. Institut Imagine will be hosting a young researcher ESR14, who will be looking into the cell and molecular bases of Waardenburg syndrome via exome sequencing, hiPSCs and NC-GRN.<br/><br/><a href='https://english.m.tau.ac.il/profile/carmitlevy' target='_blank'>Click here for research team details <i class='fa fa-angle-double-right'></i></a>"
	},
     'upsay': {
		'name': "Associated Partner: Université Paris-Saclay, France",
          'link': "https://www.universite-paris-saclay.fr/en",
          'logo': "img/partners-logo/upsay-logo.png",
          'address': "Espace Technologique Bat. Discovery - RD 128 - 2e ét, 91190 Saint-Aubin, France",
          'summary': "Université Paris-Saclay (UPSaclay) is a new federation comprising higher educational institutions and research organisations, including the world-famous research intensive Université Paris Sud, (<a href='https://www.universite-paris-saclay.fr/en/university/' target='_blank'>https://www.universite-paris-saclay.fr/en/university/</a>). Altogether, UPSaclay members currently train 5.000 doctoral students among which 45% of international students. UPSaclay Doctoral College includes the 20 Doctoral Schools, covering all scientific domains (mathematics, physics, chemistry, biology, geology, economics, medecine, pharmacy) with common doctoral policy, high standards, and a common doctoral charter following European recommendations. UPSaclay delivers the Doctorate degrees and signs the agreement on joint international supervision of Doctoral Thesis for PhD students recruited by U. Paris Sud which will concern ESRs at P1 – Institut Cuire. It also provides training both in scientific and complementary skills. UPSaclay is signatory of the European charter for researchers and code of conduct for the recruitment of researchers."
	},
     'Montpellier': {
		'name': "Associated Partner: Université de Montpellier, France",
          'link': "https://www.umontpellier.fr/en/",
          'logo': "img/partners-logo/Montpellier.png",
          'address': "641 Av. du Doyen Gaston Giraud, 34000 Montpellier, France",
          'summary': "Université de Montpellier (UM) is the 6th largest multidisciplinary University in France, gathering around 47 000 students and 4 800 staffs. UM obtained the French “Initiative – Science – Innovation – Territories – Economy” (I-SITE) certification for its project “Montpellier University of Excellence” (MUSE) in February, 2017. UM was also granted the « HR Excellence for Research » European award by the European Commission in March 2015 (first in France).   In March 2017, UM has proceeded with a mid-term review report and update of its HR Strategy for Research (HRS4R) in line with “HR Excellence in Research” European award. UM is a signatory University of the Magna Charta Universitatum. The University hosts 9 Doctoral Schools covering all fields of science, including the CBS2 Doctoral School involved in the ChromDesign project. UM delivers the Doctorate degrees and signs the agreement on joint international supervision of Doctoral Thesis for PhD students recruited by Azelead which will concern ESR15."
	},
     'universiteOfBourgogne': {
		'name': "Associated Partner: Université de Bourgogne, France",
          'link': "http://en.u-bourgogne.fr/",
          'logo': "img/partners-logo/universite-bourgogne.gif",
          'address': "University House, Espl. Erasme, 21078 Dijon, France",
          'summary': "Université de Bourgogne (uB) fulfils a dual mission of education and research in all scientific fields. It is located in six sites located in Burgundy: Auxerre, Chalon-sur-Saône, Dijon, Le Creusot, Mâcon, and Nevers. uB enrols 27,000 students, among whom 3,000 international students, every year. The “Mission Culture Scientifique” (MCS) of uB has already gained a 17-year experience in developing partnerships and organising outereach events. The Mission Culture Scientifique has performed 3000 hours of training of ESRs and run 14 000 outreach events."
	},
     'bruker': {
		'name': "Associated Partner: Bruker, France",
          'link': "https://www.bruker.com/fr.html",
          'logo': "img/partners-logo/bruker_logo.png",
          'address': "7 Rue de la Croix Martre, 91120 Palaiseau, France",
          'summary': "Currently, worldwide more than 6,000 employees at over 90 locations on all continents are working on the permanent challenge of continuing to build Bruker upon its extensive range of products and solutions, its broad base of installed systems and a strong reputation among its customers. Bruker is enabling innovation, productivity and allows scientists to make breakthrough discoveries and develop new applications that improve the quality of human life in the field of molecular research, in applied and pharma applications, and in microscopy, nano-analysis and industrial applications. In recent years, Bruker has also become a provider of high-performance systems for clinical microbiology, for molecular pathology research, for preclinical imaging and cell biology. In particular, the Bruker Fluorescent Microscopy unit is the leading innovator of in vitro and in vivo imaging techniques, including two-photon, multipoint scanning confocal, single molecule localization and light sheet microscopes for a wide range of applications, including neuroscience, cellular and developmental biology, oncology and immunology."
	},
     'HUB': {
		'name': "Associated Partner: Hubrecht Organoid Technology, the Netherlands",
          'link': "https://huborganoids.nl/",
          'logo': "img/partners-logo/HUB.png",
          'address': "Yalelaan 62, 3584 CM Utrecht, 3582 CM Utrecht, Netherlands",
          'summary': "The foundation Hubrecht Organoid Technology (HUB) is a not-for-profit organization founded by the Royal Dutch Academy of Science and University Medical Center Utrecht, The Netherlands. HUB was founded to translate and implement the organoid technology for pre-clinical and clinical applications. The Organoid Technology is an adult stem cell based technology to in vitro establish and expand human (epithelial) cells while maintaining genetic stability. This proprietary technology was developed at the Hubrecht Institute in the group of Prof Dr Clevers.<br/><br/>HUB generates 'Living Biobanks' of multiple diseases such as Cancer and Cystic Fibrosis. In addition, HUB develops new disease models and experimental programs to study disease using the Organoid model. The biobank organoids and the organoid technology are available for the academic world. Furthermore, HUB collaborates with, and licenses the technology to the pharmaceutical industry for drug development and screening. Finally, the HUB and partners are performing clinical trials to validate the organoid technology as a predictive and diagnostic tool for personalized medicine."
	},
     'EMBL': {
		'name': "Associated Partner: EMBL-EBI, UK",
          'link': "https://www.ebi.ac.uk/",
          'logo': "img/partners-logo/EMBL.png",
          'address': "Wellcome Genome Campus, Cambridge CB10 1SD, United Kingdom",
          'summary': "EMBL-EBI is one of two organisations worldwide with a mandate to provide biomolecular data resources to the research community, and forms a component of several global and pan-European research infrastructures: it is the European node of several global data collections for the life sciences. Demand for access to EMBL-EBI’s services is high and growing, averaging 28 million web requests per day and 3.2 million unique IP addresses per month to the website. Training is embedded in EMBL-EBI’s mission. The Training Programme (<a href='www.ebi.ac.uk/training/' target='_blank'>www.ebi.ac.uk/training/</a>) works with colleagues and collaborators worldwide to deliver an extensive portfolio of advanced training via face-to-face and online courses and workshops. In 2017 EMBL-EBI reached >18000 individuals face-to-face through its training and outreach activities; furthermore, >400000 unique IP addresses accessed its e-learning resource, Train online (<a href='www.ebi.ac.k/training/online' target='_blank'>www.ebi.ac.k/training/online</a>).<br/><br/>Predoctoral students at EMBL-EBI join The EMBL International PhD Programme (<a href='www.embl.de/training/eipp' target='_blank'>www.embl.de/training/eipp</a>) and gain their PhDs through the University of Cambridge. Students have access to a full programme of both scientific and transferrable skills training."
	},
     'Phenocell': {
		'name': "Associated Partner: Phenocell, France",
          'link': "https://www.phenocell.com/",
          'logo': "img/partners-logo/Phenocell.png",
          'address': "45 Boulevard Marcel Pagnol, 06130 Grasse, France",
          'summary': "Phenocell creates and produces cellular models of human pathophysiology through the Nobel-winning technology of cell reprogramming (iPSC). The technology allows producing unlimited amounts of cells with unequaled reproducibility, enabling long-lasting drug discovery with unprecedented accuracy. In addition to cell production, Phenocell is a tailor-made R&D partner for developing efficacy and toxicology assays with iPSC-derived cells."
	},
     'Paris-descartes': {
		'name': "Associated Partner: Université Paris-Descartes, France",
          'link': "https://u-paris.fr/",
          'logo': "img/partners-logo/Paris-descartes.jpg",
          'address': "12 Rue de l'École de Médecine, 75006 Paris, France",
          'summary': "With its nine Training and research departments (UFR) and its Institute of Technology (IUT), Paris Descartes University encompasses all the fields of knowledge of human and health sciences. It is the only university of the Ile-deFrance region to offer medical, pharmaceutical and odontological studies; its health department is renowned in Europe and in the whole world for the high quality of its training and the excellence of its research.<br/><br/>UPSaclay delivers the Doctorate degrees and signs the agreement on joint international supervision of Doctoral Thesis for PhD students recruited by Institut Imagine which will concern ESR 14 at P11 – Institut Imagine."
	},
     'EXRC-Portsmouth': {
		'name': "Associated Partner: European Xenopus Resource Centre (University of Portsmouth), UK",
          'link': "https://xenopusresource.org",
          'logo': "img/partners-logo/EXRC-Portsmouth.png",
          'address': "St Michael’s Building,White Swan Road Portsmouth, Hampshire, PO1 2DT, United Kingdom",
          'summary': "The European Xenopus Resource Centre (EXRC) is funded by the Wellcome Trust, BBSRC and NC3Rs to support researchers using Xenopus models. Professor Matt Guille is the leading scientist that represents the EXRC in the NEUcrest consortium.<br/><br/>EXRC hosts secondments and provides training and expertise in the General overview of gene editing (human cells and all animal models) and practical training in CRISPR/Cas9 mediated gene editing using frog embryos."
	}
};

function launchModel(id) {
	/*if(! bAndpData.hasOwnProperty(id)){
		$('#dev-popup').modal('show');
		return true;
	}*/
	
	$("#brandNameDiv").fadeOut('fast');
	
	if(["curie", "kcl", "uea", "NUI", "UMH", "Erasmus_MC", "MUW", "TAU", "Stemcell", "Azelead", "Imagine"].indexOf(id) !== -1){
		$("#detailsCard").removeClass("border-primary border-success").addClass("border-primary")
		$("#bandpDetailsLabel").removeClass("text-primary text-success").addClass("text-primary")
		$("#bandpDetailsHeader").removeClass("border-primary border-success").addClass("border-primary")
		$("#detailsImageCard").removeClass("border-primary border-success").addClass("border-primary")
	} else {
		$("#detailsCard").removeClass("border-primary border-success").addClass("border-success")
		$("#bandpDetailsLabel").removeClass("text-primary text-success").addClass("text-success")
		$("#bandpDetailsHeader").removeClass("border-primary border-success").addClass("border-success")
		$("#detailsImageCard").removeClass("border-primary border-success").addClass("border-success")
	}
	
     $('#bandpDetailsLabel').html(bAndpData[id]['name']);
     $("#model-logo").attr("src", bAndpData[id]['logo']);
     $('#name').html('<b>Name: </b>' + bAndpData[id]['name']);
     $('#address').html('<b>Address: </b>' + bAndpData[id]['address']);
     $('#summary').html('<b>Summary: </b>' + bAndpData[id]['summary']);
     $('#link').html('<b>Link: </b><a target="_blank" href="' + bAndpData[id]['link'] + '">' + bAndpData[id]['link'] + "</a>");
     
     //$('#bandpDetails').modal('show');
     $("html, body").animate({
          scrollTop: 0
     }, 1000);
     
     $("#showDetailsDiv").fadeIn(1500);
}

function clickOnDetailsClose(){
	$('#bandpDetailsLabel').html();
	$('#model-logo').attr('src', '');
	$('#name').html();
	$('#address').html();
	$('#summary').html();
	$('#link').html();
	
	$("#showDetailsDiv").fadeOut('fast');
	$("#brandNameDiv").fadeIn(1500);
	$("html, body").animate({
          scrollTop: 0
     }, 1000);
}
