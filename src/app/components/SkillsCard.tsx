import PropTypes from 'prop-types';

const SkillsCard = ({ imageSrc, title }) => {
    return (
        <div className='w-[250px] h-[300px] flex-shrink-0 bouncing-card' style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 8px 16px" }}>
            <div className="h-2/3">
                <img src={imageSrc} className="h-full w-full object-cover" alt={title} />
            </div>
            <div className="h-1/3 mx-auto flex justify-center items-center font-semibold">
                <div className="text-customRed border-b-4 border-customRed-bg">
                    {title}
                </div>
            </div>
        </div>
    );
};

SkillsCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SkillsCard;