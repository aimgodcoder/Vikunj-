import React, { useState } from "react";

const MAX_MEMBERS = 5;

export default function TeamForm() {
    const [teamName, setTeamName] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [members, setMembers] = useState([""]);
    
    const handleTeamNameChange = (e) => setTeamName(e.target.value);

    const handleMemberChange = (index, value) => {
        const updatedMembers = [...members];
        updatedMembers[index] = value;
        setMembers(updatedMembers);
    };

    const handleAddMember = () => {
        if (members.length < MAX_MEMBERS) {
            setMembers([...members, ""]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            teamName,
            members: members.filter((m) => m.trim() !== "")
        };
        try {
            const response = await fetch("http://localhost:4000/api/v1/team/getteams", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                alert("Team saved successfully!");
                setTeamName("");
                setMembers([""]);
            } else {
                alert("Failed to save team.");
            }
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Team Name:</label>
                <input
                    type="text"
                    value={teamName}
                    onChange={handleTeamNameChange}
                    placeholder="Enter team name"
                />
            </div>
            <div>
                <label>Team Members:</label>
                {members.map((member, idx) => (
                    <div key={idx}>
                        <input
                            type="text"
                            value={member}
                            onChange={(e) => handleMemberChange(idx, e.target.value)}
                            placeholder={`Member ${idx + 1} name`}
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddMember}
                    disabled={members.length >= MAX_MEMBERS}
                >
                    Add Another Member
                </button>
                {members.length >= MAX_MEMBERS && (
                    <p style={{ color: "red" }}>
                        Only 5 members can be added.
                    </p>
                )}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

