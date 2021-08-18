import React from 'react';

const Forum = () => {
    return (
        <div>
            <form>
                <label>
                    Имя:
                    <input type="text" name="name"/>
                </label>
                <button>Отправить</button>
            </form>
        </div>
    );
};

export default Forum;