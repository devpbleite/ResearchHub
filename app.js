/* ================================================
   ResearchHub — App Logic & Mock Data
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

// ── Mock Data ──
const RESEARCH_AREAS = [
    'Ortopédica', 'Neurológica', 'Cardiorrespiratória',
    'Esportiva', 'Pediátrica', 'Geriátrica'
];

const AVATAR_COLORS = [
    'linear-gradient(135deg, #3478ff, #8b5cf6)',
    'linear-gradient(135deg, #10b981, #06b6d4)',
    'linear-gradient(135deg, #f59e0b, #f43f5e)',
    'linear-gradient(135deg, #8b5cf6, #ec4899)',
    'linear-gradient(135deg, #06b6d4, #3478ff)',
    'linear-gradient(135deg, #f43f5e, #f59e0b)',
    'linear-gradient(135deg, #10b981, #34d399)',
    'linear-gradient(135deg, #7c3aed, #3478ff)',
];

const researchers = [
    { id: 1, name: 'Dra. Camila Ferreira', initials: 'CF', title: 'Coordenadora de Pesquisa', area: 'Neurológica', projects: 5, publications: 12, citations: 89, color: 0 },
    { id: 2, name: 'Dr. Rafael Mendes', initials: 'RM', title: 'Pesquisador Sênior', area: 'Ortopédica', projects: 4, publications: 9, citations: 67, color: 1 },
    { id: 3, name: 'Dra. Ana Beatriz Costa', initials: 'AC', title: 'Pesquisadora', area: 'Cardiorrespiratória', projects: 3, publications: 7, citations: 43, color: 2 },
    { id: 4, name: 'Dr. Lucas Oliveira', initials: 'LO', title: 'Pesquisador', area: 'Esportiva', projects: 3, publications: 6, citations: 38, color: 3 },
    { id: 5, name: 'Dra. Juliana Santos', initials: 'JS', title: 'Pesquisadora Sênior', area: 'Pediátrica', projects: 4, publications: 8, citations: 52, color: 4 },
    { id: 6, name: 'Dr. Pedro Almeida', initials: 'PA', title: 'Pesquisador', area: 'Geriátrica', projects: 2, publications: 5, citations: 28, color: 5 },
    { id: 7, name: 'Dra. Mariana Silva', initials: 'MS', title: 'Pós-doutoranda', area: 'Neurológica', projects: 3, publications: 4, citations: 21, color: 6 },
    { id: 8, name: 'Dr. Thiago Barbosa', initials: 'TB', title: 'Doutorando', area: 'Ortopédica', projects: 2, publications: 3, citations: 14, color: 7 },
];

const projects = [
    { id: 1, title: 'Efeitos da estimulação magnética transcraniana na recuperação motora pós-AVC', subtitle: 'PRJ-2024-001', researcher: researchers[0], area: 'Neurológica', progress: 78, status: 'Em Andamento', deadline: '2026-12-15', progressColor: 'blue' },
    { id: 2, title: 'Protocolo de reabilitação acelerada em reconstrução de LCA', subtitle: 'PRJ-2024-002', researcher: researchers[1], area: 'Ortopédica', progress: 92, status: 'Revisão', deadline: '2026-10-30', progressColor: 'amber' },
    { id: 3, title: 'Impacto da reabilitação pulmonar em pacientes pós-COVID', subtitle: 'PRJ-2024-003', researcher: researchers[2], area: 'Cardiorrespiratória', progress: 55, status: 'Coleta de Dados', deadline: '2027-03-20', progressColor: 'blue' },
    { id: 4, title: 'Prevenção de lesões musculoesqueléticas em atletas de alto rendimento', subtitle: 'PRJ-2024-004', researcher: researchers[3], area: 'Esportiva', progress: 65, status: 'Em Andamento', deadline: '2027-01-10', progressColor: 'emerald' },
    { id: 5, title: 'Fisioterapia aquática no desenvolvimento neuropsicomotor infantil', subtitle: 'PRJ-2025-001', researcher: researchers[4], area: 'Pediátrica', progress: 40, status: 'Coleta de Dados', deadline: '2027-06-30', progressColor: 'blue' },
    { id: 6, title: 'Exercícios de equilíbrio e prevenção de quedas em idosos', subtitle: 'PRJ-2025-002', researcher: researchers[5], area: 'Geriátrica', progress: 30, status: 'Coleta de Dados', deadline: '2027-08-15', progressColor: 'violet' },
    { id: 7, title: 'Neurofeedback e controle motor em pacientes com Parkinson', subtitle: 'PRJ-2025-003', researcher: researchers[6], area: 'Neurológica', progress: 15, status: 'Em Andamento', deadline: '2027-11-30', progressColor: 'blue' },
    { id: 8, title: 'Terapia por ondas de choque no tratamento de tendinopatias', subtitle: 'PRJ-2025-004', researcher: researchers[7], area: 'Ortopédica', progress: 100, status: 'Concluído', deadline: '2026-08-20', progressColor: 'emerald' },
    { id: 9, title: 'Realidade virtual na reabilitação de membros superiores', subtitle: 'PRJ-2025-005', researcher: researchers[0], area: 'Neurológica', progress: 50, status: 'Análise', deadline: '2027-04-15', progressColor: 'violet' },
    { id: 10, title: 'Efeitos do pilates clínico na lombalgia crônica', subtitle: 'PRJ-2025-006', researcher: researchers[1], area: 'Ortopédica', progress: 88, status: 'Revisão', deadline: '2026-11-05', progressColor: 'amber' },
];

const publications = [
    { title: 'Transcranial magnetic stimulation and post-stroke motor recovery: a randomized controlled trial', authors: 'Ferreira, C.; Silva, M.; Oliveira, L.', journal: 'Brazilian Journal of Physical Therapy', year: 2026, qualis: 'A1', citations: 23, doi: '10.1590/bjpt-2026-001' },
    { title: 'Accelerated ACL rehabilitation protocol: 2-year follow-up outcomes', authors: 'Mendes, R.; Barbosa, T.', journal: 'Journal of Orthopaedic & Sports Physical Therapy', year: 2026, qualis: 'A1', citations: 18, doi: '10.2519/jospt-2026-045' },
    { title: 'Pulmonary rehabilitation in long COVID: systematic review', authors: 'Costa, A.B.; Ferreira, C.', journal: 'Respiratory Medicine', year: 2026, qualis: 'A2', citations: 31, doi: '10.1016/j.rmed.2026.003' },
    { title: 'Aquatic therapy and child neuropsychomotor development', authors: 'Santos, J.; Costa, A.B.', journal: 'Developmental Medicine & Child Neurology', year: 2025, qualis: 'A1', citations: 15, doi: '10.1111/dmcn.2025-123' },
    { title: 'Balance training for fall prevention in elderly: meta-analysis', authors: 'Almeida, P.; Santos, J.', journal: 'Age and Ageing', year: 2025, qualis: 'A2', citations: 27, doi: '10.1093/ageing/2025-089' },
    { title: "Neurofeedback-based motor control in Parkinson's disease", authors: 'Silva, M.; Ferreira, C.', journal: 'Neurorehabilitation and Neural Repair', year: 2025, qualis: 'A1', citations: 12, doi: '10.1177/nnr.2025.067' },
];

const activities = [
    { icon: 'check_circle', color: 'ai-emerald', text: '<strong>Dra. Camila Ferreira</strong> concluiu a fase de coleta de dados do projeto PRJ-2024-001', time: 'Há 2 horas' },
    { icon: 'upload_file', color: 'ai-blue', text: '<strong>Dr. Rafael Mendes</strong> submeteu artigo para revisão no JOSPT', time: 'Há 4 horas' },
    { icon: 'group_add', color: 'ai-violet', text: '<strong>Dra. Ana Beatriz</strong> adicionou 15 novos participantes ao estudo pós-COVID', time: 'Há 6 horas' },
    { icon: 'star', color: 'ai-amber', text: 'Publicação de <strong>Dra. Juliana Santos</strong> recebeu 5 novas citações', time: 'Há 1 dia' },
    { icon: 'event_available', color: 'ai-blue', text: '<strong>Dr. Lucas Oliveira</strong> agendou apresentação dos resultados parciais', time: 'Há 1 dia' },
    { icon: 'description', color: 'ai-emerald', text: '<strong>Dr. Pedro Almeida</strong> atualizou o protocolo de pesquisa do PRJ-2025-002', time: 'Há 2 dias' },
    { icon: 'emoji_events', color: 'ai-rose', text: 'Artigo de <strong>Dra. Mariana Silva</strong> foi aceito no Neurorehabilitation and Neural Repair', time: 'Há 3 dias' },
];

const notifications = [
    { icon: 'check_circle', text: 'Projeto PRJ-2024-002 atingiu 92% de conclusão', time: 'Há 30 min' },
    { icon: 'warning', text: 'Prazo do projeto PRJ-2024-001 se aproxima (15/12/2026)', time: 'Há 2 horas' },
    { icon: 'article', text: 'Nova publicação indexada no PubMed', time: 'Há 5 horas' },
];

const timelineEvents = [
    { date: 'Setembro 2026', title: 'Apresentação de Resultados Parciais', desc: 'Dra. Camila Ferreira apresentou resultados parciais do estudo sobre estimulação magnética transcraniana no Congresso Brasileiro de Fisioterapia.', dotColor: 'dot-blue' },
    { date: 'Agosto 2026', title: 'Publicação Aceita — JOSPT', desc: 'Artigo do Dr. Rafael Mendes sobre protocolo de reabilitação do LCA aceito para publicação no Journal of Orthopaedic & Sports Physical Therapy.', dotColor: 'dot-emerald' },
    { date: 'Julho 2026', title: 'Novo Financiamento Aprovado', desc: 'CNPq aprovou financiamento de R$ 250.000 para o projeto de reabilitação pulmonar pós-COVID coordenado pela Dra. Ana Beatriz Costa.', dotColor: 'dot-violet' },
    { date: 'Junho 2026', title: 'Marco de Coleta de Dados', desc: 'Projeto de fisioterapia aquática infantil atingiu 200 sessões de coleta, superando a meta do semestre.', dotColor: 'dot-amber' },
    { date: 'Maio 2026', title: 'Parceria Internacional', desc: 'Estabelecida parceria com a Universidade de Melbourne para troca de pesquisadores no programa de prevenção de quedas em idosos.', dotColor: 'dot-blue' },
    { date: 'Abril 2026', title: 'Defesa de Tese — Dr. Thiago Barbosa', desc: 'Conclusão da tese sobre terapia por ondas de choque em tendinopatias com aprovação unânime da banca.', dotColor: 'dot-rose' },
    { date: 'Março 2026', title: 'Início de 3 Novos Projetos', desc: 'Centro de pesquisa iniciou oficialmente os projetos PRJ-2025-003, PRJ-2025-004 e PRJ-2025-005.', dotColor: 'dot-emerald' },
    { date: 'Fevereiro 2026', title: 'Aquisição de Equipamentos', desc: 'Recebimento de sistema de realidade virtual para reabilitação e aparelho de estimulação magnética transcraniana.', dotColor: 'dot-violet' },
];


// ── DOM References ──
const body = document.body;
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const themeToggle = document.getElementById('theme-toggle');
const searchBar = document.getElementById('search-bar');
const searchModal = document.getElementById('search-modal');
const modalSearchInput = document.getElementById('modal-search-input');
const searchResults = document.getElementById('search-results');
const notificationBtn = document.getElementById('notification-btn');
const notificationPanel = document.getElementById('notification-panel');
const navItems = document.querySelectorAll('.nav-item[data-page]');
const viewAllLinks = document.querySelectorAll('[data-page]');


// ── Theme ──
function initTheme() {
    const savedTheme = localStorage.getItem('rh-theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const current = body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    localStorage.setItem('rh-theme', next);
    updateThemeIcon(next);
    // Re-render charts with new colors
    renderCharts();
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.material-symbols-rounded');
    icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
}


// ── Sidebar ──
function toggleSidebar() {
    sidebar.classList.toggle('open');
}

sidebarToggle.addEventListener('click', toggleSidebar);
themeToggle.addEventListener('click', toggleTheme);


// ── Navigation ──
function navigateTo(pageId) {
    // Update nav items
    navItems.forEach(function(item) {
        item.classList.toggle('active', item.dataset.page === pageId);
    });

    // Show page
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.classList.add('active');

    // Update breadcrumb
    const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
    const pageNames = {
        dashboard: 'Dashboard',
        projects: 'Projetos',
        researchers: 'Pesquisadores',
        publications: 'Publicações',
        timeline: 'Linha do Tempo',
        reports: 'Relatórios',
    };
    breadcrumbCurrent.textContent = pageNames[pageId] || pageId;

    // Close sidebar on mobile
    sidebar.classList.remove('open');

    // Initialize page-specific content
    if (pageId === 'projects') renderKanban();
    if (pageId === 'researchers') renderResearchersFull();
    if (pageId === 'publications') renderPublicationsPage();
    if (pageId === 'timeline') renderTimeline();
}

// Make navigateTo and closeSearch available globally for inline onclick handlers
window.navigateTo = navigateTo;

// Nav click handlers
navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo(item.dataset.page);
    });
});

// View all links
viewAllLinks.forEach(function(link) {
    if (link.classList.contains('nav-item')) return; // already handled
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});


// ── Search ──
function openSearch() {
    searchModal.classList.add('visible');
    setTimeout(function() { modalSearchInput.focus(); }, 100);
}

function closeSearch() {
    searchModal.classList.remove('visible');
    modalSearchInput.value = '';
    searchResults.innerHTML = '<div class="search-hint"><span class="material-symbols-rounded">lightbulb</span><p>Digite para buscar em projetos, pesquisadores e publicações</p></div>';
}

window.closeSearch = closeSearch;

searchBar.addEventListener('click', openSearch);

searchModal.addEventListener('click', function(e) {
    if (e.target === searchModal) closeSearch();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }
    if (e.key === 'Escape') closeSearch();
});

modalSearchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
        searchResults.innerHTML = '<div class="search-hint"><span class="material-symbols-rounded">lightbulb</span><p>Digite para buscar em projetos, pesquisadores e publicações</p></div>';
        return;
    }

    let html = '';

    // Search projects
    const matchingProjects = projects.filter(function(p) {
        return p.title.toLowerCase().includes(query) ||
            p.subtitle.toLowerCase().includes(query) ||
            p.area.toLowerCase().includes(query);
    });
    matchingProjects.forEach(function(p) {
        html += '<div class="search-result-item" onclick="closeSearch(); navigateTo(\'projects\');">' +
            '<span class="material-symbols-rounded">science</span>' +
            '<div class="search-result-text">' +
            '<div class="srt-title">' + p.title + '</div>' +
            '<div class="srt-subtitle">' + p.subtitle + ' · ' + p.area + '</div>' +
            '</div></div>';
    });

    // Search researchers
    const matchingResearchers = researchers.filter(function(r) {
        return r.name.toLowerCase().includes(query) ||
            r.area.toLowerCase().includes(query) ||
            r.title.toLowerCase().includes(query);
    });
    matchingResearchers.forEach(function(r) {
        html += '<div class="search-result-item" onclick="closeSearch(); navigateTo(\'researchers\');">' +
            '<span class="material-symbols-rounded">person</span>' +
            '<div class="search-result-text">' +
            '<div class="srt-title">' + r.name + '</div>' +
            '<div class="srt-subtitle">' + r.title + ' · ' + r.area + '</div>' +
            '</div></div>';
    });

    // Search publications
    const matchingPubs = publications.filter(function(p) {
        return p.title.toLowerCase().includes(query) ||
            p.authors.toLowerCase().includes(query) ||
            p.journal.toLowerCase().includes(query);
    });
    matchingPubs.forEach(function(p) {
        html += '<div class="search-result-item" onclick="closeSearch(); navigateTo(\'publications\');">' +
            '<span class="material-symbols-rounded">article</span>' +
            '<div class="search-result-text">' +
            '<div class="srt-title">' + p.title + '</div>' +
            '<div class="srt-subtitle">' + p.journal + ' · ' + p.year + '</div>' +
            '</div></div>';
    });

    if (!html) {
        html = '<div class="search-hint"><span class="material-symbols-rounded">search_off</span><p>Nenhum resultado encontrado</p></div>';
    }

    searchResults.innerHTML = html;
});


// ── Notifications ──
notificationBtn.addEventListener('click', function() {
    notificationPanel.classList.toggle('open');
});

document.addEventListener('click', function(e) {
    if (!notificationPanel.contains(e.target) && !notificationBtn.contains(e.target)) {
        notificationPanel.classList.remove('open');
    }
});

function renderNotifications() {
    const list = document.getElementById('notification-list');
    list.innerHTML = notifications.map(function(n) {
        return '<div class="notification-item">' +
            '<div class="ni-icon"><span class="material-symbols-rounded">' + n.icon + '</span></div>' +
            '<div class="ni-content">' +
            '<div class="ni-text">' + n.text + '</div>' +
            '<div class="ni-time">' + n.time + '</div>' +
            '</div></div>';
    }).join('');
}


// ── KPI Animation ──
function animateKPIs() {
    const kpiValues = document.querySelectorAll('.kpi-value');
    kpiValues.forEach(function(el) {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.round(current) + suffix;
        }, 30);
    });
}


// ── Projects Table ──
function renderProjectsTable() {
    const tbody = document.getElementById('projects-tbody');
    const statusMap = {
        'Em Andamento': 'badge-active',
        'Coleta de Dados': 'badge-collecting',
        'Análise': 'badge-analysis',
        'Revisão': 'badge-review',
        'Concluído': 'badge-completed',
    };

    tbody.innerHTML = projects.slice(0, 6).map(function(p) {
        const deadlineFormatted = new Date(p.deadline).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
        return '<tr>' +
            '<td><div class="project-title-cell">' +
            '<span class="title">' + p.title + '</span>' +
            '<span class="subtitle">' + p.subtitle + '</span>' +
            '</div></td>' +
            '<td><div class="researcher-cell">' +
            '<div class="avatar" style="background:' + AVATAR_COLORS[p.researcher.color] + '"><span>' + p.researcher.initials + '</span></div>' +
            '<span class="name">' + p.researcher.name + '</span>' +
            '</div></td>' +
            '<td><span class="kanban-card-area">' + p.area + '</span></td>' +
            '<td><div class="progress-bar-container">' +
            '<div class="progress-bar"><div class="progress-bar-fill ' + p.progressColor + '" data-width="' + p.progress + '"></div></div>' +
            '<span class="progress-text">' + p.progress + '%</span>' +
            '</div></td>' +
            '<td><span class="badge ' + statusMap[p.status] + '">' + p.status + '</span></td>' +
            '<td style="white-space:nowrap; font-size:0.82rem; color:var(--text-secondary);">' + deadlineFormatted + '</td>' +
            '</tr>';
    }).join('');

    // Animate progress bars
    requestAnimationFrame(function() {
        setTimeout(function() {
            document.querySelectorAll('.progress-bar-fill[data-width]').forEach(function(bar) {
                bar.style.width = bar.dataset.width + '%';
            });
        }, 200);
    });
}


// ── Activity Feed ──
function renderActivityFeed() {
    const list = document.getElementById('activity-list');
    list.innerHTML = activities.map(function(a) {
        return '<div class="activity-item">' +
            '<div class="activity-icon ' + a.color + '"><span class="material-symbols-rounded">' + a.icon + '</span></div>' +
            '<div class="activity-body">' +
            '<div class="activity-text">' + a.text + '</div>' +
            '<div class="activity-time">' + a.time + '</div>' +
            '</div></div>';
    }).join('');
}


// ── Researchers Grid (Dashboard) ──
function renderResearchersHighlight() {
    const grid = document.getElementById('researchers-grid');
    grid.innerHTML = researchers.slice(0, 4).map(function(r) {
        return '<div class="researcher-card">' +
            '<div class="avatar avatar-lg" style="background:' + AVATAR_COLORS[r.color] + '"><span>' + r.initials + '</span></div>' +
            '<div class="rc-name">' + r.name + '</div>' +
            '<div class="rc-title">' + r.title + '</div>' +
            '<div class="rc-stats">' +
            '<div class="rc-stat"><span class="rc-stat-value">' + r.projects + '</span><span class="rc-stat-label">Projetos</span></div>' +
            '<div class="rc-stat"><span class="rc-stat-value">' + r.publications + '</span><span class="rc-stat-label">Publicações</span></div>' +
            '<div class="rc-stat"><span class="rc-stat-value">' + r.citations + '</span><span class="rc-stat-label">Citações</span></div>' +
            '</div></div>';
    }).join('');
}


// ── Charts ──
let evolutionChart = null;
let areasChart = null;
let pubYearChart = null;
let qualisChart = null;

function getChartColors() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    return {
        text: isDark ? '#94a3b8' : '#64748b',
        grid: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
        bg: isDark ? '#111827' : '#ffffff',
    };
}

function renderCharts() {
    renderEvolutionChart();
    renderAreasChart();
}

function renderEvolutionChart() {
    const ctx = document.getElementById('chart-evolution');
    if (!ctx) return;
    const colors = getChartColors();

    if (evolutionChart) evolutionChart.destroy();

    const months = ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'];

    evolutionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Projetos Concluídos',
                    data: [2, 3, 4, 5, 5, 7, 8, 9, 10, 12, 14, 16],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2.5,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#10b981',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                },
                {
                    label: 'Em Andamento',
                    data: [18, 19, 17, 20, 21, 22, 20, 23, 22, 24, 24, 24],
                    borderColor: '#3478ff',
                    backgroundColor: 'rgba(52, 120, 255, 0.08)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2.5,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#3478ff',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                },
                {
                    label: 'Publicações',
                    data: [1, 2, 2, 3, 4, 6, 7, 9, 11, 13, 15, 18],
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.06)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2.5,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointHoverBackgroundColor: '#8b5cf6',
                    pointHoverBorderColor: '#fff',
                    pointHoverBorderWidth: 2,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        color: colors.text,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 20,
                        font: { family: 'Inter', size: 12, weight: '500' },
                    },
                },
                tooltip: {
                    backgroundColor: colors.bg,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.grid,
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: { family: 'Inter', weight: '600' },
                    bodyFont: { family: 'Inter' },
                    displayColors: true,
                    boxPadding: 6,
                },
            },
            scales: {
                x: {
                    grid: { color: colors.grid },
                    ticks: { color: colors.text, font: { family: 'Inter', size: 11 } },
                    border: { display: false },
                },
                y: {
                    grid: { color: colors.grid },
                    ticks: { color: colors.text, font: { family: 'Inter', size: 11 } },
                    border: { display: false },
                    beginAtZero: true,
                },
            },
        },
    });
}

function renderAreasChart() {
    const ctx = document.getElementById('chart-areas');
    if (!ctx) return;
    const colors = getChartColors();

    if (areasChart) areasChart.destroy();

    const areaData = RESEARCH_AREAS.map(function(area) {
        return projects.filter(function(p) { return p.area === area; }).length;
    });
    const chartColors = ['#3478ff', '#8b5cf6', '#10b981', '#f59e0b', '#06b6d4', '#f43f5e'];

    areasChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: RESEARCH_AREAS,
            datasets: [{
                data: areaData,
                backgroundColor: chartColors,
                borderWidth: 0,
                spacing: 3,
                borderRadius: 6,
                hoverOffset: 8,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: colors.bg,
                    titleColor: colors.text,
                    bodyColor: colors.text,
                    borderColor: colors.grid,
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: { family: 'Inter', weight: '600' },
                    bodyFont: { family: 'Inter' },
                    displayColors: true,
                    boxPadding: 6,
                },
            },
        },
    });

    // Custom legend
    const legendContainer = document.getElementById('areas-legend');
    legendContainer.innerHTML = RESEARCH_AREAS.map(function(area, i) {
        return '<div class="chart-legend-item">' +
            '<span class="chart-legend-dot" style="background:' + chartColors[i] + '"></span>' +
            '<span>' + area + ' (' + areaData[i] + ')</span>' +
            '</div>';
    }).join('');
}

function renderPublicationsCharts() {
    const colors = getChartColors();

    // Publications by year
    const ctxPY = document.getElementById('chart-publications-year');
    if (ctxPY) {
        if (pubYearChart) pubYearChart.destroy();
        pubYearChart = new Chart(ctxPY, {
            type: 'bar',
            data: {
                labels: ['2021', '2022', '2023', '2024', '2025', '2026'],
                datasets: [{
                    label: 'Publicações',
                    data: [5, 8, 10, 14, 16, 18],
                    backgroundColor: 'rgba(52, 120, 255, 0.7)',
                    borderColor: '#3478ff',
                    borderWidth: 1,
                    borderRadius: 6,
                    borderSkipped: false,
                    barThickness: 36,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: colors.bg,
                        titleColor: colors.text,
                        bodyColor: colors.text,
                        borderColor: colors.grid,
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                    },
                },
                scales: {
                    x: { grid: { display: false }, ticks: { color: colors.text, font: { family: 'Inter', size: 12 } }, border: { display: false } },
                    y: { grid: { color: colors.grid }, ticks: { color: colors.text, font: { family: 'Inter', size: 11 } }, border: { display: false }, beginAtZero: true },
                },
            },
        });
    }

    // Qualis chart
    const ctxQ = document.getElementById('chart-qualis');
    if (ctxQ) {
        if (qualisChart) qualisChart.destroy();
        qualisChart = new Chart(ctxQ, {
            type: 'polarArea',
            data: {
                labels: ['A1', 'A2', 'B1', 'B2', 'B3'],
                datasets: [{
                    data: [8, 5, 3, 1, 1],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.6)',
                        'rgba(52, 120, 255, 0.6)',
                        'rgba(139, 92, 246, 0.6)',
                        'rgba(245, 158, 11, 0.6)',
                        'rgba(100, 116, 139, 0.6)',
                    ],
                    borderWidth: 0,
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: colors.text,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            padding: 16,
                            font: { family: 'Inter', size: 11 },
                        },
                    },
                    tooltip: {
                        backgroundColor: colors.bg,
                        titleColor: colors.text,
                        bodyColor: colors.text,
                        borderColor: colors.grid,
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                    },
                },
                scales: {
                    r: {
                        grid: { color: colors.grid },
                        ticks: { display: false },
                        beginAtZero: true,
                    },
                },
            },
        });
    }
}


// ── Kanban Board ──
function renderKanban() {
    const container = document.getElementById('projects-kanban');
    const statuses = ['Em Andamento', 'Coleta de Dados', 'Análise', 'Revisão', 'Concluído'];
    const statusIcons = {
        'Em Andamento': 'play_circle',
        'Coleta de Dados': 'data_usage',
        'Análise': 'query_stats',
        'Revisão': 'rate_review',
        'Concluído': 'check_circle',
    };

    const filterStatusEl = document.getElementById('filter-status');
    const filterAreaEl = document.getElementById('filter-area');
    const filterStatus = filterStatusEl ? filterStatusEl.value : 'all';
    const filterArea = filterAreaEl ? filterAreaEl.value : 'all';

    let filteredProjects = projects;
    if (filterStatus !== 'all') filteredProjects = filteredProjects.filter(function(p) { return p.status === filterStatus; });
    if (filterArea !== 'all') filteredProjects = filteredProjects.filter(function(p) { return p.area === filterArea; });

    const statusesToShow = filterStatus !== 'all' ? [filterStatus] : statuses;

    container.innerHTML = statusesToShow.map(function(status) {
        const statusProjects = filteredProjects.filter(function(p) { return p.status === status; });
        let cardsHtml = statusProjects.map(function(p) {
            const deadlineFormatted = new Date(p.deadline).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
            return '<div class="kanban-card" data-id="' + p.id + '">' +
                '<div class="kanban-card-title">' + p.title + '</div>' +
                '<div class="kanban-card-meta">' +
                '<span>' + p.subtitle + '</span>' +
                '<span class="kanban-card-area">' + p.area + '</span>' +
                '</div>' +
                '<div class="kanban-card-progress">' +
                '<div class="progress-bar"><div class="progress-bar-fill ' + p.progressColor + '" style="width:' + p.progress + '%"></div></div>' +
                '<span class="progress-text">' + p.progress + '%</span>' +
                '</div>' +
                '<div class="kanban-card-footer">' +
                '<div class="kanban-card-researcher">' +
                '<div class="avatar" style="background:' + AVATAR_COLORS[p.researcher.color] + ';width:24px;height:24px;font-size:0.6rem"><span>' + p.researcher.initials + '</span></div>' +
                p.researcher.name.split(' ').slice(0, 2).join(' ') +
                '</div>' +
                '<div class="kanban-card-deadline">' +
                '<span class="material-symbols-rounded">schedule</span>' +
                deadlineFormatted +
                '</div></div></div>';
        }).join('');

        return '<div class="kanban-column">' +
            '<div class="kanban-column-header">' +
            '<div class="kanban-column-title">' +
            '<span class="material-symbols-rounded" style="font-size:18px">' + statusIcons[status] + '</span>' +
            status +
            '</div>' +
            '<span class="kanban-column-count">' + statusProjects.length + '</span>' +
            '</div>' +
            '<div class="kanban-column-body" data-status="' + status + '">' +
            cardsHtml +
            '</div></div>';
    }).join('');

    // Re-initialize SortableJS every time we render
    initSortableKanban();
}


// ── Researchers Full Page ──
function renderResearchersFull() {
    const grid = document.getElementById('researchers-full-grid');
    grid.innerHTML = researchers.map(function(r) {
        return '<div class="researcher-full-card">' +
            '<div class="avatar avatar-lg" style="background:' + AVATAR_COLORS[r.color] + '"><span>' + r.initials + '</span></div>' +
            '<div class="rfc-name">' + r.name + '</div>' +
            '<div class="rfc-title">' + r.title + '</div>' +
            '<div class="rfc-area">' + r.area + '</div>' +
            '<div class="rfc-stats-grid">' +
            '<div class="rfc-stat"><span class="rfc-stat-value">' + r.projects + '</span><span class="rfc-stat-label">Projetos</span></div>' +
            '<div class="rfc-stat"><span class="rfc-stat-value">' + r.publications + '</span><span class="rfc-stat-label">Publicações</span></div>' +
            '<div class="rfc-stat"><span class="rfc-stat-value">' + r.citations + '</span><span class="rfc-stat-label">Citações</span></div>' +
            '</div></div>';
    }).join('');
}


// ── Publications Page ──
function renderPublicationsPage() {
    renderPublicationsCharts();
    const list = document.getElementById('publications-list');
    const qualisMap = { A1: 'q-a1', A2: 'q-a2', B1: 'q-b1', B2: 'q-b2' };

    list.innerHTML = publications.map(function(p) {
        return '<div class="publication-item">' +
            '<div class="pub-icon"><span class="material-symbols-rounded">article</span></div>' +
            '<div class="pub-content">' +
            '<div class="pub-title">' + p.title + '</div>' +
            '<div class="pub-authors">' + p.authors + '</div>' +
            '<div class="pub-meta">' +
            '<span class="pub-meta-item"><span class="material-symbols-rounded">menu_book</span>' + p.journal + '</span>' +
            '<span class="pub-meta-item"><span class="material-symbols-rounded">calendar_today</span>' + p.year + '</span>' +
            '<span class="pub-meta-item"><span class="material-symbols-rounded">format_quote</span>' + p.citations + ' citações</span>' +
            '<span class="pub-qualis ' + (qualisMap[p.qualis] || '') + '">' + p.qualis + '</span>' +
            '</div></div></div>';
    }).join('');
}


// ── Timeline ──
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timelineEvents.map(function(e) {
        return '<div class="timeline-item">' +
            '<div class="timeline-dot ' + e.dotColor + '"></div>' +
            '<div class="timeline-card">' +
            '<div class="timeline-date">' + e.date + '</div>' +
            '<div class="timeline-title">' + e.title + '</div>' +
            '<div class="timeline-desc">' + e.desc + '</div>' +
            '</div></div>';
    }).join('');
}


// ── Filter handlers ──
const filterStatusEl = document.getElementById('filter-status');
const filterAreaEl = document.getElementById('filter-area');
if (filterStatusEl) filterStatusEl.addEventListener('change', renderKanban);
if (filterAreaEl) filterAreaEl.addEventListener('change', renderKanban);


// ── Greeting based on time ──
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) greeting = 'Bom dia';
    else if (hour < 18) greeting = 'Boa tarde';
    else greeting = 'Boa noite';

    const welcomeH2 = document.querySelector('.welcome-text h2');
    if (welcomeH2) welcomeH2.textContent = greeting + ', Dr. John 👋';
}


// ── SortableJS (Drag & Drop) ──
function initSortableKanban() {
    if (typeof Sortable === 'undefined') return;
    const columns = document.querySelectorAll('.kanban-column-body');
    columns.forEach(col => {
        new Sortable(col, {
            group: 'kanban',
            animation: 150,
            ghostClass: 'sortable-ghost',
            onEnd: function (evt) {
                const itemEl = evt.item; 
                const toCol = evt.to;
                
                const projectId = parseInt(itemEl.getAttribute('data-id'));
                const newStatus = toCol.getAttribute('data-status');
                
                // Update project data
                const project = projects.find(p => p.id === projectId);
                if (project && project.status !== newStatus) {
                    project.status = newStatus;
                    
                    // Add an activity feed entry
                    activities.unshift({
                        icon: 'sync_alt',
                        color: 'ai-blue',
                        text: '<strong>Dr. John</strong> moveu o projeto ' + project.subtitle + ' para <strong>' + newStatus + '</strong>',
                        time: 'Agora mesmo'
                    });
                    
                    // Refresh other views that depend on status
                    renderProjectsTable();
                    renderActivityFeed();
                    animateKPIs();
                    // Don't re-render Kanban here, let SortableJS handle the DOM, otherwise it flickers.
                    // But we do need to update column counts
                    updateKanbanCounts();
                }
            }
        });
    });
}

function updateKanbanCounts() {
    const columns = document.querySelectorAll('.kanban-column');
    columns.forEach(col => {
        const status = col.querySelector('.kanban-column-body').getAttribute('data-status');
        const count = projects.filter(p => p.status === status).length;
        col.querySelector('.kanban-column-count').textContent = count;
    });
}


// ── Modals & Forms ──
function initModals() {
    const overlay = document.querySelectorAll('.modal-overlay');
    const closeBtns = document.querySelectorAll('[data-dismiss="modal"]');
    
    // Close Modals
    const closeModal = () => overlay.forEach(m => m.classList.remove('active'));
    
    closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
    overlay.forEach(m => m.addEventListener('click', (e) => {
        if(e.target === m) closeModal();
    }));
    
    // Open Modals
    const openModal = (id) => {
        const modal = document.getElementById(id);
        if (modal) modal.classList.add('active');
    };

    const btnNewProject = document.getElementById('btn-new-project');
    const btnAddProject = document.getElementById('btn-add-project');
    const btnAddResearcher = document.getElementById('btn-add-researcher');
    const btnAddPublication = document.getElementById('btn-add-publication');
    const btnGenerateReport = document.getElementById('btn-generate-report');
    
    if (btnNewProject) btnNewProject.addEventListener('click', () => {
        populateResearcherSelect();
        openModal('modal-new-project');
    });
    if (btnAddProject) btnAddProject.addEventListener('click', () => {
        populateResearcherSelect();
        openModal('modal-new-project');
    });
    if (btnAddResearcher) btnAddResearcher.addEventListener('click', () => openModal('modal-add-researcher'));
    if (btnAddPublication) btnAddPublication.addEventListener('click', () => openModal('modal-add-publication'));
    if (btnGenerateReport) btnGenerateReport.addEventListener('click', () => openModal('modal-generate-report'));
    
    // Setup Forms Submit
    setupFormSubmits(closeModal);
}

function populateResearcherSelect() {
    const select = document.getElementById('select-researchers');
    if (!select) return;
    select.innerHTML = '<option value="">Selecione...</option>' + 
        researchers.map(r => '<option value="' + r.id + '">' + r.name + '</option>').join('');
}

function setupFormSubmits(closeModal) {
    // 1. New Project
    const formProject = document.getElementById('form-new-project');
    if (formProject) formProject.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(formProject);
        const researcher = researchers.find(r => r.id === parseInt(fd.get('researcherId')));
        
        projects.unshift({
            id: projects.length + 1,
            title: fd.get('title'),
            subtitle: fd.get('code'),
            researcher: researcher,
            area: fd.get('area'),
            progress: 0,
            status: fd.get('status'),
            deadline: fd.get('deadline'),
            progressColor: 'blue'
        });
        
        activities.unshift({ icon: 'add_circle', color: 'ai-emerald', text: '<strong>Dr. John</strong> criou o projeto ' + fd.get('code'), time: 'Agora mesmo' });
        
        formProject.reset();
        closeModal();
        renderProjectsTable();
        renderKanban();
        renderActivityFeed();
        animateKPIs();
        alert('Projeto salvo com sucesso!');
    });

    // 2. New Researcher
    const formResearcher = document.getElementById('form-add-researcher');
    if (formResearcher) formResearcher.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(formResearcher);
        
        researchers.push({
            id: researchers.length + 1,
            name: fd.get('name'),
            initials: fd.get('initials').toUpperCase(),
            title: fd.get('title'),
            area: fd.get('area'),
            projects: 0,
            publications: 0,
            citations: 0,
            color: Math.floor(Math.random() * 8)
        });
        
        formResearcher.reset();
        closeModal();
        renderResearchersFull();
        animateKPIs();
        alert('Pesquisador adicionado com sucesso!');
    });

    // 3. New Publication
    const formPub = document.getElementById('form-add-publication');
    if (formPub) formPub.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(formPub);
        
        publications.unshift({
            title: fd.get('title'),
            authors: fd.get('authors'),
            journal: fd.get('journal'),
            year: parseInt(fd.get('year')),
            qualis: fd.get('qualis'),
            citations: 0,
            doi: fd.get('doi') || ''
        });
        
        activities.unshift({ icon: 'article', color: 'ai-violet', text: '<strong>Dr. John</strong> adicionou uma nova publicação', time: 'Agora mesmo' });
        
        formPub.reset();
        closeModal();
        renderPublicationsPage();
        renderActivityFeed();
        animateKPIs();
        alert('Publicação registrada!');
    });

    // 4. Generate Report
    const formReport = document.getElementById('form-generate-report');
    if (formReport) formReport.addEventListener('submit', (e) => {
        e.preventDefault();
        formReport.reset();
        closeModal();
        alert('Gerando PDF do relatório. O download começará em instantes (simulação).');
    });
}



// ── Run ──
initTheme();
updateGreeting();
animateKPIs();
renderProjectsTable();
renderActivityFeed();
renderResearchersHighlight();
renderNotifications();
renderCharts();
initModals();

}); // end DOMContentLoaded
