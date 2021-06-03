import React from 'react'
import '../styles/EmailContainer.css'
import EmailContainerHeader from './EmailContainerHeader'
import EmailContainerType from './EmailContainerType'
import EmailCard from './EmailCard'

const EmailContainer = () => {
    return (
        <>
            <div className="email_container">
                <EmailContainerHeader />
                <div className="email_cards">
                    <EmailContainerType />
                    <EmailCard senderName="Darkness Developer" message="Your account has been blocked for spam messages" date="May 29" />
                    <EmailCard senderName="Facebook" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Jan 21" />
                    <EmailCard senderName="GitHub" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Apr 16" />
                    <EmailCard senderName="Darkness Developer" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="May 29" />
                    <EmailCard senderName="Facebook" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Jan 21" />
                    <EmailCard senderName="GitHub" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Apr 16" />
                    <EmailCard senderName="Darkness Developer" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="May 29" />
                    <EmailCard senderName="Facebook" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Jan 21" />
                    <EmailCard senderName="GitHub" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Apr 16" />
                    <EmailCard senderName="Darkness Developer" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="May 29" />
                    <EmailCard senderName="Facebook" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Jan 21" />
                    <EmailCard senderName="GitHub" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores non autem officiis totam sed possimus vitae" date="Apr 16" />
                </div>
            </div>
        </>
    )
}

export default EmailContainer