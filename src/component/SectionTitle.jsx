import { SectionFlower } from './icons';
import { cn } from '../lib/utils';

const SectionTitle = ({ icon, title, className, classNames }) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <SectionFlower
                    width={25}
                    className={cn(
                        'animate-spin duration-7000',
                        classNames?.icon,
                    )}
                />
            )}
            <h2
                className={cn(
                    'text-xl uppercase leading-none',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;