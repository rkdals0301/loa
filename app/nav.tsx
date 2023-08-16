import Link from 'next/link'
import Toolbar from '@mui/material/Toolbar';

export default function Nav() {
    const sections = [
        { title: '홈', url: '/' },
        { title: '소식', url: '/news' },
        { title: '캐릭터', url: '/characters' },
        { title: '무기고', url: '/armories' },
        { title: '경매', url: '/auctions' },
        { title: '길드', url: '/guilds' },
        { title: '시장', url: '/markets' },
        { title: '콘텐츠', url: '/contents' },
    ];

    return (
        <>
            <Toolbar
                sx={{ justifyContent: 'space-between' }}
            >
                {sections.map((section) => (
                    <Link
                        key={section.title}
                        href={section.url}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </>
    )
}
