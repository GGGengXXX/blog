export type BlogCategory = 'note' | 'diary' | 'idea' | 'essay';

export const categoryLabels: Record<
	BlogCategory | 'all',
	{ zh: string; en: string; descriptionZh: string; descriptionEn: string; accent: string }
> = {
	all: {
		zh: '全部',
		en: 'All',
		descriptionZh: '所有写作都会先落在这里。',
		descriptionEn: 'Everything written lands here first.',
		accent: 'var(--ink)',
	},
	note: {
		zh: '笔记',
		en: 'Notes',
		descriptionZh: '技术、论文、命令和读书摘录。',
		descriptionEn: 'Technical notes, papers, commands, and reading excerpts.',
		accent: 'var(--blue)',
	},
	diary: {
		zh: '日记',
		en: 'Diary',
		descriptionZh: '当天发生的事、状态和小结论。',
		descriptionEn: 'Days, moods, and small conclusions.',
		accent: 'var(--red)',
	},
	idea: {
		zh: '想法',
		en: 'Ideas',
		descriptionZh: '还没成熟，但值得以后回头看的问题。',
		descriptionEn: 'Questions worth returning to before they are fully formed.',
		accent: 'var(--green)',
	},
	essay: {
		zh: '文章',
		en: 'Essays',
		descriptionZh: '整理过的长文、复盘和专题。',
		descriptionEn: 'Longer essays, reviews, and focused topics.',
		accent: 'var(--gold)',
	},
};

export const postText: Record<
	string,
	Partial<{
		title: string;
		description: string;
		mood: string;
		tags: string[];
	}>
> = {
	'first-post': {
		title: 'Today I set up the blog first',
		description: 'An opening diary: build the container first, then let real life move in.',
		mood: 'Starting',
		tags: ['Diary', 'Blog', 'Start'],
	},
	'second-post': {
		title: 'Astro blog maintenance checklist',
		description: 'A future note for adding posts, editing the homepage, deploying, and debugging.',
		mood: 'Clear',
		tags: ['Astro', 'GitHub Pages', 'Notes'],
	},
	'third-post': {
		title: 'Idea: write diary entries like experiments',
		description: 'A diary can record hypotheses, observations, and the next small test.',
		mood: 'Curious',
		tags: ['Writing', 'Method', 'Idea'],
	},
	'markdown-style-guide': {
		title: 'Markdown writing style notes',
		description: 'A short memo for common Markdown patterns used in this blog.',
		mood: 'Organizing',
		tags: ['Markdown', 'Writing'],
	},
	'using-mdx': {
		title: 'What MDX can be used for',
		description: 'Put small interactive pieces inside posts so the blog is more than static text.',
		mood: 'Experiment',
		tags: ['MDX', 'Interactive', 'Astro'],
	},
};

export const experiments = [
	{
		href: '/lab',
		kicker: 'Interactive essay lab',
		titleZh: '月相实验台',
		titleEn: 'Moon phase workbench',
		descriptionZh: '给文章里的概念准备一个可调参数的小实验，参考 Ciechanowski 的交互式说明。',
		descriptionEn: 'A parameter-driven demo for explorable notes, inspired by interactive essays.',
	},
	{
		href: '/game',
		kicker: 'Sub page game',
		titleZh: '驾驶小车逛博客',
		titleEn: 'Drive through the blog',
		descriptionZh: '一个独立的游戏子页面，作为个人站里的彩蛋入口。',
		descriptionEn: 'A small game subpage that turns the personal site into a playful entrance.',
	},
];

export const writingPrompts = [
	{
		zh: '今天最值得留下来的一个细节是什么？',
		en: 'What detail from today is most worth keeping?',
	},
	{
		zh: '最近有什么问题反复出现，但还没有被认真记录？',
		en: 'What question keeps returning but has not been properly written down?',
	},
	{
		zh: '如果把今天当成一个实验，结论会是什么？',
		en: 'If today were an experiment, what would the conclusion be?',
	},
	{
		zh: '哪一条笔记以后可能会救你十分钟？',
		en: 'Which note might save you ten minutes later?',
	},
	{
		zh: '现在最想整理的一团东西是什么？',
		en: 'What messy thing do you most want to sort out right now?',
	},
];
